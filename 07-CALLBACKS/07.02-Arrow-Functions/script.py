# Define a list of numbers
numbers = [1, 2, 3, 4, 5]

# Add a number to the list
numbers.append(6)

# Remove a number from the list
numbers.remove(3)

# Access an element by index
third_element = numbers[2]  # Remember, indexing starts at 0, so this is the 3rd element.

# Slice the list
first_three_elements = numbers[:3]

# Loop through the list
for num in numbers:
    print(num)

# Print the results
print("Updated List:", numbers)
print("Third Element:", third_element)
print("First Three Elements:", first_three_elements)