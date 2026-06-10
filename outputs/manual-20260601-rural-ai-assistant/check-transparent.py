from pathlib import Path
from PIL import Image, ImageDraw
files = [
    Path(r'E:\vibe_coding\profilo\demo_pic\乡村AI文化导览_透明底.png'),
    Path(r'E:\vibe_coding\profilo\demo_pic\乡村活动预约_透明底.png'),
    Path(r'E:\vibe_coding\profilo\demo_pic\乡村村民共创_透明底.png'),
    Path(r'E:\vibe_coding\profilo\demo_pic\乡村运营洞察_透明底.png'),
    Path(r'E:\vibe_coding\profilo\demo_pic\茶韵莲乡首页_透明底.png'),
]
thumbs=[]
for p in files:
    im=Image.open(p).convert('RGBA')
    im.thumbnail((190,260), Image.Resampling.LANCZOS)
    thumbs.append((p,im.copy()))
w=5*220+40; h=330
bg=Image.new('RGBA',(w,h),(0,83,49,255))
d=ImageDraw.Draw(bg)
for i,(p,im) in enumerate(thumbs):
    x=20+i*220+(190-im.width)//2; y=24
    bg.alpha_composite(im,(x,y))
    d.text((20+i*220,295),p.stem[:12],fill=(236,120,166,255))
out=Path(r'E:\vibe_coding\profilo\outputs\manual-20260601-rural-ai-assistant\transparent-check.png')
bg.save(out)
print(out)
for p in files:
    im=Image.open(p).convert('RGBA')
    corners=[im.getpixel((0,0))[3], im.getpixel((im.width-1,0))[3], im.getpixel((0,im.height-1))[3], im.getpixel((im.width-1,im.height-1))[3]]
    print(p.name, corners)
