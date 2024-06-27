import json
from pathlib import Path

dir_path = Path(".")

# Find all JSON files in the source directory and its subdirectories
json_files = dir_path.rglob("*.json")
for file_path in json_files:
    try:
        # Read the JSON content from the source file
        with open(file_path, "r", encoding="utf-8") as source_file:
            data = json.load(source_file)

        # Write the JSON content to the target file
        with open(file_path, "w", encoding="utf-8") as target_file:
            json.dump(data, target_file, ensure_ascii=False, indent=4)

    except Exception as e:
        print(e)
