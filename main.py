













import re

def complexity_checker(password):
    # Define the checks
    length_score = len(password) >= 8
    upper_case = bool(re.search(r'[A-Z]', password))
    lower_case = bool(re.search(r'[a-z]', password))
    digit = bool(re.search(r'\d', password))  # Check for at least one digit
    special = bool(re.search(r'[!"#$%&\'()*+,-./:;<=>?@[\\\]^_`{|}~]', password))
    
    # Calculate total score
    total = sum([length_score, upper_case, lower_case, digit, special])
    
    # Determine strength
    if total == 5:
        return "Strong password"
    elif total >= 3:
        return "Good password"
    else:
        return "Weak password"

# Get user input and check password strength
password = input("Enter your password: ")
strength = complexity_checker(password)
print(f"Password strength: {strength}")
