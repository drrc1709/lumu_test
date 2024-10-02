import re
from collections import Counter
import matplotlib.pyplot as plt

def word_frequency_counter(file_path):
   
    with open(file_path, 'r', encoding='utf-8') as file:
        text = file.read()
    
    char_count = len(text) - text.count(" ")
    
    words = re.findall(r'\b\w+\b', text.lower())

    word_count = len(words)
    
    word_freq = Counter(words)
    
    sorted_word_freq = sorted(word_freq.items(), key=lambda x: x[1], reverse=True)
    
    print(f"{word_count} words")
    print(f"{char_count} characters\n")
    
    for word, freq in sorted_word_freq:
        print(f"{word}: {freq}")
    
    return sorted_word_freq

def create_histogram(word_freq):
    words, frequencies = zip(*word_freq)
    
    plt.bar(words, frequencies, color='blue')
    plt.xlabel('Words')
    plt.ylabel('Frequency')
    plt.title('Frequency of Words')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    file_path = 'text.txt'
    word_freq = word_frequency_counter(file_path)
    create_histogram(word_freq)
