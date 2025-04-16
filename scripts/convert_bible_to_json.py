import json

def read_formatted_bible(file_path):
    bible_dict = {}
    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            # Split by tab to separate reference and content
            # Split reference into book, chapter, verse
            book, chapter, verse,content = line.strip().split('||')
            
            # Create nested dictionary structure if not exists
            if book not in bible_dict:
                bible_dict[book] = {}
            if chapter not in bible_dict[book]:
                bible_dict[book][chapter] = {}
                
            bible_dict[book][chapter][verse] = content.strip()
    
    return bible_dict

def main():
    # Process Pollard Bible
    pollard_input = 'pollard_bible_formatted.txt'
    pollard_output = 'display_bible_web/public/pollard_bible_data.json'
    pollard_dict = read_formatted_bible(pollard_input)
    
    # Process Chinese Bible
    chinese_input = 'chinese_bible_formatted.txt'
    chinese_output = 'display_bible_web/public/chinese_bible_data.json'
    chinese_dict = read_formatted_bible(chinese_input)
    
    # Write to JSON files
    with open(pollard_output, 'w', encoding='utf-8') as f:
        json.dump(pollard_dict, f, ensure_ascii=False, indent=2)
        
    with open(chinese_output, 'w', encoding='utf-8') as f:
        json.dump(chinese_dict, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    main() 