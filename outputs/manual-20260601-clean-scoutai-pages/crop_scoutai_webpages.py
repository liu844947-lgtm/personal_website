from pathlib import Path
import sys

from PIL import Image


def is_page_pixel(rgb):
    r, g, b = rgb[:3]
    return r >= 225 and g >= 222 and b >= 218


def is_dark_shell(rgb):
    r, g, b = rgb[:3]
    return r + g + b < 90


def longest_light_run(row):
    best_start = best_end = current_start = None
    best_len = current_len = 0
    for x, pixel in enumerate(row):
        if is_page_pixel(pixel):
            if current_start is None:
                current_start = x
                current_len = 0
            current_len += 1
            if current_len > best_len:
                best_len = current_len
                best_start = current_start
                best_end = x + 1
        else:
            current_start = None
            current_len = 0
    return best_start, best_end, best_len


def find_crop_box(image):
    width, height = image.size
    pixels = image.load()
    light_threshold = int(width * 0.72)
    dark_threshold = int(width * 0.70)

    top_dark_seen = False
    top = None
    for y in range(height):
        row = [pixels[x, y] for x in range(width)]
        dark_count = sum(1 for pixel in row if is_dark_shell(pixel))
        if dark_count >= dark_threshold:
            top_dark_seen = True
            continue
        if top_dark_seen:
            _, _, length = longest_light_run(row)
            if length >= light_threshold:
                top = y
                break

    if top is None:
        raise RuntimeError("Could not detect webpage top edge")

    bottom = height
    for y in range(top + 100, height):
        row = [pixels[x, y] for x in range(width)]
        dark_count = sum(1 for pixel in row if is_dark_shell(pixel))
        if dark_count >= dark_threshold:
            bottom = y
            break

    sample_rows = []
    for y in range(top + 8, min(bottom, top + 55)):
        row = [pixels[x, y] for x in range(width)]
        start, end, length = longest_light_run(row)
        if length >= light_threshold:
            sample_rows.append((start, end))

    if not sample_rows:
        row = [pixels[x, top + 12] for x in range(width)]
        left, right, _ = longest_light_run(row)
    else:
        left = min(start for start, _ in sample_rows)
        right = max(end for _, end in sample_rows)

    pad = 0
    return max(0, left - pad), max(0, top - pad), min(width, right + pad), min(height, bottom + pad)


def main():
    if len(sys.argv) < 3 or len(sys.argv[1:]) % 2:
        raise SystemExit("usage: crop_scoutai_webpages.py input1 output1 [input2 output2 ...]")

    pairs = list(zip(sys.argv[1::2], sys.argv[2::2]))
    for source, target in pairs:
        source_path = Path(source)
        target_path = Path(target)
        image = Image.open(source_path).convert("RGB")
        box = find_crop_box(image)
        cropped = image.crop(box)
        target_path.parent.mkdir(parents=True, exist_ok=True)
        cropped.save(target_path)
        print(f"{source_path.name} -> {target_path} crop={box} size={cropped.size[0]}x{cropped.size[1]}")


if __name__ == "__main__":
    main()
