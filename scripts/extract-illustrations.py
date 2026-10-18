#!/usr/bin/env python3
"""Technical crop/resize only; the source art was created with built-in image_gen.
Usage: python3 scripts/extract-illustrations.py /path/to/art
Requires Pillow. The local art folder must contain sheet-01.png ... sheet-07.png.
"""
import hashlib
import json
import sys
from pathlib import Path
from PIL import Image, ImageOps

app = Path(__file__).resolve().parents[1]
art = Path(sys.argv[1])
out = app / 'docs/assets/cards'
manifest_path = app / 'scripts/illustration-manifest.json'
manifest = json.loads(manifest_path.read_text())
boundaries = {
    1: ([0,313,627,941,1254], [0,313,627,937,1254]),
    2: ([0,313,627,938,1254], [0,294,594,909,1254]),
    3: ([0,313,627,940,1254], [0,314,626,940,1254]),
    4: ([0,313,627,940,1254], [0,313,618,917,1254]),
    5: ([0,314,627,940,1254], [0,313,627,914,1254]),
    6: ([0,313,627,941,1254], [0,303,615,919,1254]),
    7: ([0,627,1254], [0,627,1254]),
}
for rec in manifest['mapping']:
    n = rec['sheet']
    xs, ys = boundaries[n]
    r, c = rec['row']-1, rec['column']-1
    box = (xs[c]+6, ys[r]+6, xs[c+1]-6, ys[r+1]-6)
    source = Image.open(art / f'sheet-{n:02d}.png').convert('RGB')
    # Preserve the whole cell, including heads/hands. Small slate padding is
    # preferable to silently cropping semantic details from a non-square cell.
    image = ImageOps.pad(source.crop(box), (384,384), Image.Resampling.LANCZOS,
                         color='#171b22', centering=(0.5,0.5))
    target = out / f"{rec['id']}.webp"
    image.save(target, 'WEBP', quality=86, method=6)
    rec['cropBox'] = list(box)
    rec['sha256'] = hashlib.sha256(target.read_bytes()).hexdigest()
manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2))
print(f"Saved {len(manifest['mapping'])} illustrations at 384 x 384 pixels.")
