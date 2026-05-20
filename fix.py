import re

files = [
    r'app\components\contact\ContactForm\ContactForm.js',
    r'app\components\home\ContactSection\ContactSection.js'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The pattern matches: >\s*+\d+\s+CountryName\s*</option>
    # Note: we need to handle the newlines in things like "+236 Central African Republic"
    pattern = r'>\s*\+(\d+)\s+([\s\S]*?)\s*</option>'
    
    # We replace with >$2 (+$1)</option>
    # In python re.sub, \1 is group 1, \2 is group 2
    new_content = re.sub(pattern, r'>\2 (+\1)</option>', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

print(f"Replacement complete for {files}")
