from collections import deque
from pathlib import Path
import sys

from PIL import Image, ImageFilter


def is_key_like(pixel):
    r, g, b, a = pixel
    if a == 0:
        return True
    dist = ((r - 253) ** 2 + (g - 3) ** 2 + (b - 251) ** 2) ** 0.5
    magenta_dominant = r >= 150 and b >= 145 and g <= 95 and ((r + b) - (g * 2)) >= 260
    return dist <= 145 or magenta_dominant


def is_boundary_purple(pixel):
    r, g, b, a = pixel
    if a == 0:
        return True
    purple_shadow = r >= 35 and b >= 35 and g <= 125 and ((r + b) - (g * 2)) >= 10 and abs(r - b) <= 110
    return purple_shadow


def main():
    if len(sys.argv) != 3:
        raise SystemExit("usage: remove_magenta_fringe.py input.png output.png")

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    image = Image.open(input_path).convert("RGBA")
    pixels = image.load()
    width, height = image.size

    visited = bytearray(width * height)
    queue = deque()

    def add_seed(x, y):
        if x < 0 or x >= width or y < 0 or y >= height:
            return
        idx = y * width + x
        if visited[idx]:
            return
        if is_key_like(pixels[x, y]):
            visited[idx] = 1
            queue.append((x, y))

    for x in range(width):
        add_seed(x, 0)
        add_seed(x, height - 1)
    for y in range(height):
        add_seed(0, y)
        add_seed(width - 1, y)

    neighbors = [(-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (1, -1), (-1, 1), (1, 1)]
    while queue:
        x, y = queue.popleft()
        pixels[x, y] = (0, 0, 0, 0)
        for dx, dy in neighbors:
            add_seed(x + dx, y + dy)

    alpha = image.getchannel("A")
    transparent = alpha.point(lambda a: 255 if a == 0 else 0)
    halo_zone = transparent.filter(ImageFilter.MaxFilter(11))

    pixels = image.load()
    zone = halo_zone.load()
    for y in range(height):
        for x in range(width):
            if zone[x, y] and is_key_like(pixels[x, y]):
                pixels[x, y] = (0, 0, 0, 0)

    alpha = image.getchannel("A")
    transparent = alpha.point(lambda a: 255 if a == 0 else 0)
    purple_zone = transparent.filter(ImageFilter.MaxFilter(25))
    pixels = image.load()
    zone = purple_zone.load()
    for y in range(height):
        for x in range(width):
            if zone[x, y] and is_boundary_purple(pixels[x, y]):
                pixels[x, y] = (0, 0, 0, 0)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(output_path)


if __name__ == "__main__":
    main()
