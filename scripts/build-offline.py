from pathlib import Path
import re,json
root=Path(__file__).resolve().parent.parent
p=root/'docs'
assert len(list((p/'assets/cards').glob('i*.webp')))==100,'Need all 100 contextual images'
assert len(list((p/'audio').glob('i*.mp3')))==200,'Need all 200 Ryan audio clips'
assets=['./'+str(f.relative_to(p)) for f in sorted(p.rglob('*')) if f.is_file() and f.name not in ['.nojekyll','sw.js','.DS_Store']]
s=(root/'scripts/sw-template.js').read_text()
s=s.replace('__ASSETS__',json.dumps(assets,ensure_ascii=False,indent=2))
(p/'sw.js').write_text(s)
print(json.dumps({'assets':len(assets),'bytes':sum((p/x[2:]).stat().st_size for x in assets)}))
