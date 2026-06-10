from collections import deque
from pathlib import Path
from PIL import Image

items = [
    (Path(r'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_12 (2).png'), Path(r'E:\vibe_coding\profilo\demo_pic\乡村AI文化导览_透明底.png')),
    (Path(r'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_13 (3).png'), Path(r'E:\vibe_coding\profilo\demo_pic\乡村活动预约_透明底.png')),
    (Path(r'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_13 (4).png'), Path(r'E:\vibe_coding\profilo\demo_pic\乡村村民共创_透明底.png')),
    (Path(r'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_14 (5).png'), Path(r'E:\vibe_coding\profilo\demo_pic\乡村运营洞察_透明底.png')),
    (Path(r'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_12 (1).png'), Path(r'E:\vibe_coding\profilo\demo_pic\茶韵莲乡首页_透明底.png')),
]

def bg_like(px):
    r, g, b, a = px
    mx = max(r, g, b)
    mn = min(r, g, b)
    if r >= 236 and g >= 236 and b >= 236:
        return True
    if mn >= 204 and (mx - mn) <= 42:
        return True
    if mn >= 188 and (mx - mn) <= 20:
        return True
    return False

def remove_edge_bg(src_path, out_path):
    im = Image.open(src_path).convert('RGBA')
    w, h = im.size
    pix = im.load()
    visited = bytearray(w * h)
    q = deque()
    for x in range(w):
        q.append((x, 0)); q.append((x, h - 1))
    for y in range(1, h - 1):
        q.append((0, y)); q.append((w - 1, y))
    removed = 0
    while q:
        x, y = q.popleft()
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        idx = y * w + x
        if visited[idx]:
            continue
        visited[idx] = 1
        p = pix[x, y]
        if not bg_like(p):
            continue
        pix[x, y] = (p[0], p[1], p[2], 0)
        removed += 1
        q.append((x + 1, y)); q.append((x - 1, y)); q.append((x, y + 1)); q.append((x, y - 1))

    # Feather only the transparent/opaque boundary to avoid a hard white edge.
    alpha = im.getchannel('A')
    im.putalpha(alpha.filter(Image.Filter.GaussianBlur(0.35)) if False else alpha)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    im.save(out_path)
    return out_path.name, w, h, removed

for src, out in items:
    print(remove_edge_bg(src, out))
