import os
import json
from pathlib import Path

source_directory = Path("./slok")
target_directory = Path("../bhagavad-gita-data/slok")

# Find all JSON files in the source directory and its subdirectories
json_files = source_directory.rglob("*.json")
for source_path in json_files:
    chapter, slok = 0, 0
    try:
        # Read the JSON content from the source file
        with open(source_path, "r", encoding="utf-8") as source_file:
            data = json.load(source_file)
        chapter = int(str(source_path).split("\\")[1])
        slok = int(str(source_path).split("\\")[2])
        target_path = Path(
            f"../bhagavad-gita-data/slok/bhagavadgita_chapter_{chapter}_slok_{slok}.json"
        )

        # Create target directory if it does not exist
        os.makedirs(os.path.dirname(target_path), exist_ok=True)

        # Write the JSON content to the target file
        with open(target_path, "w", encoding="utf-8") as fp:
            json.dump(data, fp, ensure_ascii=False, indent=4)
            fp.write("\n")

    except Exception as e:
        print(chapter, slok)
        print(e)
