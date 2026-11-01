// Complete Python Interactive Digital Book Dataset
const BOOK_DATA = [
  {
    "id": "ch-01",
    "num": "01",
    "title": "Installation",
    "page": 1,
    "topics": [
      {
        "id": "downloading-python",
        "title": "Downloading Python",
        "chapter": "Installation",
        "page": 1,
        "readTime": "2 min",
        "content": {
          "intro": "To start your Python journey, the first step is to get the Python interpreter onto your machine.",
          "definition": "Python interpreter is the software that reads and executes Python code by converting it into bytecode for the Python Virtual Machine (PVM).",
          "explanation": "For downloading python go on any browser, go to python.org and download python for your operating system. Now install it and you will get the python Virtual machine which will convert the code to byte code.",
          "keyPoints": [
            "Visit python.org to download the official Python distribution.",
            "Available for Windows, macOS, and Linux.",
            "Ensure to check the box 'Add Python to PATH' during installation on Windows.",
            "Installs the Python Virtual Machine (PVM) which executes compiled bytecode."
          ],
          "codeExamples": [
            {
              "title": "Verify Python Installation in Terminal",
              "code": "# Run this command in your command prompt or terminal:\n# python --version\n# or\n# python3 --version\n\nimport sys\nprint(f\"Python Version: {sys.version}\")\nprint(f\"Executable Location: {sys.executable}\")",
              "output": "Python Version: 3.12.0 (tags/v3.12.0:0fb18b0, Oct  2 2023, 13:03:39)\nExecutable Location: C:\\Users\\ASUS\\AppData\\Local\\Programs\\Python\\Python312\\python.exe"
            }
          ],
          "notes": {
            "type": "important",
            "text": "CRITICAL: During Windows installation, tick the checkbox 'Add python.exe to PATH' at the bottom of the installer window. Without this, your terminal won't recognize the python command."
          },
          "related": [
            "downloading-ide",
            "setting-up-first-program"
          ]
        }
      },
      {
        "id": "downloading-ide",
        "title": "Downloading IDE",
        "chapter": "Installation",
        "page": 1,
        "readTime": "2 min",
        "content": {
          "intro": "Writing code in a plain text editor is possible, but modern developers use specialized tools called IDEs.",
          "definition": "IDE stands for Integrated Development Environment. It is a comprehensive software suite that provides an editor, debugger, and build automation tools in one interface.",
          "explanation": "IDE stands for Integrated Development Environment. You can write and run your code using python virtual machine. But the Conventional way is to use a IDE there are many IDE's like VS code, Pycharm, Jupyter. But we will use VS code.",
          "keyPoints": [
            "IDE provides syntax highlighting, auto-completion, linting, and integrated terminal.",
            "VS Code (Visual Studio Code) is lightweight, free, and industry-standard.",
            "Other popular IDEs: PyCharm by JetBrains, Jupyter Notebooks for data science."
          ],
          "codeExamples": [
            {
              "title": "Launching VS Code from Terminal",
              "code": "# In your terminal, navigate to your desired directory and run:\n# code .\n# This opens Visual Studio Code in the current workspace.",
              "output": "# VS Code opens with your project directory loaded in the sidebar."
            }
          ],
          "notes": {
            "type": "info",
            "text": "VS Code is developed by Microsoft and is completely free and open-source."
          },
          "related": [
            "downloading-python",
            "setting-up-first-program"
          ]
        }
      },
      {
        "id": "setting-up-first-program",
        "title": "Setting up and creating first program",
        "chapter": "Installation",
        "page": 1,
        "readTime": "3 min",
        "content": {
          "intro": "Now that Python and VS Code are installed, let's configure essential extensions and write our first program.",
          "definition": "A Python script is a plain-text file containing Python code, saved with the .py extension and executed by the Python interpreter.",
          "explanation": "For setting up we have to go to VS code and in extensions we have to install python and code runner. Lets move forward and create our first program and that will not be hello world.",
          "keyPoints": [
            "In VS Code Extensions Marketplace (Ctrl+Shift+X), install 'Python' by Microsoft.",
            "Optionally install 'Code Runner' extension for quick one-click script runs.",
            "Save files with the '.py' extension (e.g. main.py).",
            "Run scripts with: python filename.py or by pressing the Run button in VS Code."
          ],
          "codeExamples": [
            {
              "title": "First Python Program (Beyond Hello World)",
              "code": "# Our first program - Coding Academy style\nname = \"Akarsh\"\nschool = \"Coding Academy\"\nbatch = \"AI & Python\"\n\nprint(\"---------------------------------------\")\nprint(f\"Welcome {name} to {school}!\")\nprint(f\"You are learning: {batch}\")\nprint(\"Code successfully compiled to bytecode and executed!\")\nprint(\"---------------------------------------\")",
              "output": "---------------------------------------\nWelcome Akarsh to Coding Academy!\nYou are learning: AI & Python\nCode successfully compiled to bytecode and executed!\n---------------------------------------"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Note from Python Academy: This book is designed to work hand-in-hand with the visual explanations and examples shown in the video on our official Youtube channel: Python Academy."
          },
          "related": [
            "comments-in-python",
            "variables-in-python"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-02",
    "num": "02",
    "title": "Comments and Variables",
    "page": 2,
    "topics": [
      {
        "id": "comments-in-python",
        "title": "Comments in Python",
        "chapter": "Comments and Variables",
        "page": 2,
        "readTime": "2 min",
        "content": {
          "intro": "Comments let you write explanatory text within source code that Python completely ignores during execution.",
          "definition": "Comments are something that are ignored by the python interpreter. We have to use # for writing a comment in python. Multiline comments are not available in python but we can achieve it by using Doc String \"\"\" Multiline \"\"\".",
          "explanation": "Comments are something that are ignored by the python interpreter. We have to use # for writing a comment in python. Multiline comments are not available in python but we can achieve it by using Doc String \"\"\" Multiline \"\"\".",
          "keyPoints": [
            "Single-line comments start with a hash symbol (#).",
            "Anything following # on the same line is disregarded by Python.",
            "Multiline comments can be simulated using triple quotes (''' or \"\"\") as standalone docstrings.",
            "Use comments to explain WHY code is doing something, not just WHAT it does."
          ],
          "codeExamples": [
            {
              "title": "Single-line and Multiline Comments",
              "code": "# This is a single-line comment in Python\n# The interpreter will completely ignore these lines\n\nprint(\"Comments test running!\")  # This is an inline comment\n\n\"\"\"\nThis is a multiline comment achieved using DocStrings.\nPython treats unassigned triple-quoted strings as docstrings,\nwhich can span multiple lines.\n\"\"\"\n\ndef greet():\n    \"\"\"This is an official function docstring\"\"\"\n    print(\"Hello from Python!\")\n\ngreet()",
              "output": "Comments test running!\nHello from Python!"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Docstrings (\"\"\" ... \"\"\") assigned to a function, class, or module can be accessed at runtime via the .__doc__ attribute."
          },
          "related": [
            "variables-in-python",
            "rules-for-naming-variables"
          ]
        }
      },
      {
        "id": "variables-in-python",
        "title": "Variables in Python",
        "chapter": "Comments and Variables",
        "page": 2,
        "readTime": "3 min",
        "content": {
          "intro": "In Python, variables are used to hold and manipulate data throughout your program.",
          "definition": "In python Variables are used as a storage to store things in python (we will see later what we have to store). You can write anything as a variable name. Eg. Name = \"Akarsh\", Age = 12.",
          "explanation": "In python Variables are used as a storage to store things in python (we will see later what we have to store). You can write anything as a variable name. Eg. Name = \"Akarsh\", Age = 12. Python is dynamically typed, meaning you do not need to declare the variable's type explicitly.",
          "keyPoints": [
            "Variables act as labeled containers or references pointing to objects in memory.",
            "Assignment operator (=) binds a value to a variable identifier.",
            "No variable declaration keyword (like var, let, or int) is required.",
            "Variables can be reassigned to values of different types anytime."
          ],
          "codeExamples": [
            {
              "title": "Variable Declaration and Reassignment",
              "code": "# Variables in Python as per Programming notes:\nName = \"Akarsh\"\nAge = 12\n\nprint(\"Name:\", Name)\nprint(\"Age:\", Age)\n\n# Dynamic typing demonstration:\nx = 100         # x is integer\nprint(\"x is:\", x, type(x))\n\nx = \"Python\" # now x is string\nprint(\"x is now:\", x, type(x))",
              "output": "Name: Akarsh\nAge: 12\nx is: 100 <class 'int'>\nx is now: Python <class 'str'>"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Python variables are references to objects in memory, not the memory slots themselves."
          },
          "related": [
            "rules-for-naming-variables",
            "naming-conventions"
          ]
        }
      },
      {
        "id": "rules-for-naming-variables",
        "title": "Rules for Naming Variables",
        "chapter": "Comments and Variables",
        "page": 2,
        "readTime": "2 min",
        "content": {
          "intro": "Python has strict lexical rules regarding what characters can form a valid variable identifier.",
          "definition": "Variable naming rules determine whether an identifier is legally permitted by the Python syntax parser.",
          "explanation": "You can not use numbers at variable start. You can not use spaces in variables. You should not use special characters in variables. Don't use these.",
          "keyPoints": [
            "Rule 1: A variable name MUST start with a letter (a-z, A-Z) or an underscore (_).",
            "Rule 2: A variable name CANNOT start with a number (e.g. 1name is invalid).",
            "Rule 3: Variable names can only contain alphanumeric characters and underscores (a-z, A-Z, 0-9, and _).",
            "Rule 4: Spaces are NOT allowed inside variable names.",
            "Rule 5: Special characters like @, $, %, &, ! are strictly prohibited.",
            "Rule 6: Variable names are case-sensitive (age, Age, and AGE are three different variables)."
          ],
          "codeExamples": [
            {
              "title": "Valid vs Invalid Variable Names",
              "code": "# VALID variable names:\nuser_name = \"Akarsh\"\n_private_var = 42\nage2 = 18\ncoding_school = \"Python\"\n\nprint(user_name, _private_var, age2, coding_school)\n\n# INVALID variable names (will raise SyntaxError):\n# 1name = \"Error\"       # SyntaxError: invalid decimal literal\n# user name = \"Error\"   # SyntaxError: invalid syntax (space)\n# user@id = \"Error\"     # SyntaxError: cannot assign to expression here",
              "output": "Akarsh 42 18 Python"
            }
          ],
          "notes": {
            "type": "warning",
            "text": "Never use Python keywords (like if, for, while, class, def, return) as variable names."
          },
          "related": [
            "naming-conventions",
            "what-are-data-types"
          ]
        }
      },
      {
        "id": "naming-conventions",
        "title": "Naming Conventions",
        "chapter": "Comments and Variables",
        "page": 2,
        "readTime": "2 min",
        "content": {
          "intro": "Naming conventions are style agreements used across software development to make code clean, readable, and consistent.",
          "definition": "Naming conventions are standard casing patterns used to write multi-word identifiers.",
          "explanation": "You can write variables in python using 3 ways:\n- Camel case: codingSchool\n- Pascal case: CodingSchool\n- Snake case: coding_school",
          "keyPoints": [
            "Camel Case: First word lowercase, following words capitalized (codingSchool). Common in JavaScript/Java.",
            "Pascal Case: Every word capitalized (CodingSchool). Standard in Python for Class names.",
            "Snake Case: All lowercase words separated by underscores (coding_school). Standard in Python for variables and functions (PEP 8)."
          ],
          "codeExamples": [
            {
              "title": "The Three Naming Conventions in Python",
              "code": "# 1. Camel Case\ncodingSchool = \"Coding School\"\n\n# 2. Pascal Case (standard for Python classes)\nCodingSchool = \"Class Identifier\"\n\n# 3. Snake Case (Python PEP 8 standard for variables & functions)\ncoding_school = \"Coding Academy, Tech Campus\"\n\nprint(\"Camel:\", codingSchool)\nprint(\"Pascal:\", CodingSchool)\nprint(\"Snake:\", coding_school)",
              "output": "Camel: Coding School\nPascal: Class Identifier\nSnake: Coding Academy, Tech Campus"
            }
          ],
          "notes": {
            "type": "info",
            "text": "PEP 8 (Python Enhancement Proposal 8) recommends snake_case for functions and variables, and PascalCase for classes."
          },
          "related": [
            "rules-for-naming-variables",
            "what-are-data-types"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-03",
    "num": "03",
    "title": "Data Types in Python",
    "page": 3,
    "topics": [
      {
        "id": "what-are-data-types",
        "title": "What are Data Types?",
        "chapter": "Data Types in Python",
        "page": 3,
        "readTime": "2 min",
        "content": {
          "intro": "In Python, every value has a specific category that tells the interpreter how you intend to use that piece of information.",
          "definition": "Data types are the things we store in Variables and it defines what data type variables are. Python has built-in data types for different kinds of data.",
          "explanation": "Data types are the things we store in Variables and it defines what data type variables are. Python has built-in data types for different kinds of data.",
          "keyPoints": [
            "Data type defines the operations permissible on an object and its memory requirements.",
            "Python automatically detects data types at runtime (Dynamic typing).",
            "You can inspect the type of any variable using the type() function."
          ],
          "codeExamples": [
            {
              "title": "Inspecting Data Types with type()",
              "code": "a = 25\nb = 3.14\nc = \"Python\"\nd = True\n\nprint(type(a))  # <class 'int'>\nprint(type(b))  # <class 'float'>\nprint(type(c))  # <class 'str'>\nprint(type(d))  # <class 'bool'>",
              "output": "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Everything in Python is an object, and each variable is an instance of its respective class."
          },
          "related": [
            "numbers-data-types",
            "strings-data-type",
            "boolean-data-type"
          ]
        }
      },
      {
        "id": "numbers-data-types",
        "title": "Numbers (Integer, Float, Complex)",
        "chapter": "Data Types in Python",
        "page": 3,
        "readTime": "3 min",
        "content": {
          "intro": "Python supports three distinct numeric types: integers, floating-point numbers, and complex numbers.",
          "definition": "Numbers:\n- Integer: All the numbers excluding decimal places and fraction.\n- Float: All the decimal numbers and fraction values are Float.\n- Complex: Numbers with real and imaginary parts are complex.",
          "explanation": "Numbers in Python encompass three primary categories:\n- Integer: Whole positive or negative numbers without any decimals (e.g., -10, 0, 42).\n- Float: Real numbers containing decimal points or exponential notations (e.g., 3.14, -0.001).\n- Complex: Numbers with a real part and an imaginary part written with 'j' suffix (e.g., 3 + 4j).",
          "keyPoints": [
            "Integers in Python 3 have arbitrary precision (unlimited length).",
            "Floats are implemented using double precision in C (usually 64-bit IEEE 754).",
            "Complex numbers have .real and .imag attributes."
          ],
          "codeExamples": [
            {
              "title": "Integer, Float, and Complex Numbers",
              "code": "# Integer\nage = 20\npopulation = 1400000000\nprint(\"Integer:\", age, type(age))\n\n# Float\npi = 3.14159\ntemperature = -5.6\nprint(\"Float:\", pi, type(pi))\n\n# Complex\ncomp = 3 + 5j\nprint(\"Complex:\", comp, type(comp))\nprint(\"Real part:\", comp.real)\nprint(\"Imaginary part:\", comp.imag)",
              "output": "Integer: 20 <class 'int'>\nFloat: 3.14159 <class 'float'>\nComplex: (3+5j) <class 'complex'>\nReal part: 3.0\nImaginary part: 5.0"
            }
          ],
          "notes": {
            "type": "info",
            "text": "You can use underscores as visual separators in large numbers, e.g., 1_000_000."
          },
          "related": [
            "what-are-data-types",
            "strings-data-type"
          ]
        }
      },
      {
        "id": "strings-data-type",
        "title": "Strings",
        "chapter": "Data Types in Python",
        "page": 3,
        "readTime": "2 min",
        "content": {
          "intro": "Strings represent sequences of characters and are one of the most widely used data types in Python.",
          "definition": "Strings - This is used to store anything in python, literally anything that are available on your keyboard. You have to use quotes to store anything and it will be considered as string. You can use double Quotes (\"\") or single quotes ('') to store both works same.",
          "explanation": "Strings - This is used to store anything in python, literally anything that are available on your keyboard. You have to use quotes to store anything and it will be considered as string. You can use double Quotes (\"\") or single quotes ('') to store both works same.",
          "keyPoints": [
            "Enclosed in single quotes ('...') or double quotes (\"...\").",
            "Triple quotes ('''...''' or \"\"\"...\"\"\") allow multiline strings.",
            "Strings in Python are immutable sequences."
          ],
          "codeExamples": [
            {
              "title": "Creating Strings in Python",
              "code": "s1 = 'Single quote string'\ns2 = \"Double quote string with symbols @#$% 123\"\ns3 = \"\"\"Multiline\nString\nExample\"\"\"\n\nprint(s1)\nprint(s2)\nprint(s3)\nprint(\"Single and double work identical:\", s1 == 'Single quote string')",
              "output": "Single quote string\nDouble quote string with symbols @#$% 123\nMultiline\nString\nExample\nSingle and double work identical: True"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Whether you use single or double quotes is a style choice, but be consistent across your codebase."
          },
          "related": [
            "how-strings-work",
            "boolean-data-type"
          ]
        }
      },
      {
        "id": "boolean-data-type",
        "title": "Boolean",
        "chapter": "Data Types in Python",
        "page": 3,
        "readTime": "2 min",
        "content": {
          "intro": "Booleans represent the fundamental truth values used in logical comparisons and condition branching.",
          "definition": "Boolean - Theres nothing much to say this is the data type which will and always give the result of True and False.",
          "explanation": "Boolean - Theres nothing much to say this is the data type which will and always give the result of True and False. Notice that in Python, True and False are capitalized.",
          "keyPoints": [
            "Boolean values are True and False (capitalized T and F).",
            "bool is a subclass of int in Python: True == 1 and False == 0.",
            "Returned by comparison operations like 5 > 3 or 'a' in 'apple'."
          ],
          "codeExamples": [
            {
              "title": "Boolean Values and Conditions",
              "code": "is_active = True\nis_admin = False\n\nprint(is_active, type(is_active))\nprint(is_admin, type(is_admin))\n\n# Comparison returning Boolean:\nprint(\"10 > 5 is:\", 10 > 5)\nprint(\"10 == 20 is:\", 10 == 20)\n\n# Numeric relation of booleans:\nprint(\"True + True =\", True + True)  # 2\nprint(\"False * 10 =\", False * 10)    # 0",
              "output": "True <class 'bool'>\nFalse <class 'bool'>\n10 > 5 is: True\n10 == 20 is: False\nTrue + True = 2\nFalse * 10 = 0"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Always capitalize True and False. Lowercase 'true' or 'false' will result in NameError."
          },
          "related": [
            "type-conversion-concepts",
            "comparison-operators"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-04",
    "num": "04",
    "title": "Strings and Type Conversion",
    "page": 4,
    "topics": [
      {
        "id": "how-strings-work",
        "title": "How Strings Work & Unicode",
        "chapter": "Strings and Type Conversion",
        "page": 4,
        "readTime": "3 min",
        "content": {
          "intro": "Under the hood, Python strings use Unicode encoding to represent every character from every human language and emoji.",
          "definition": "Unicode is a universal character encoding standard that assigns a unique number (code point) to every character, regardless of language.",
          "explanation": "You know what strings are but you must also know string take more space than other data types like int, float etc. This happens because String stores every character with their own Unicode. Unicode is a universal character encoding standard that assigns a unique number (code point) to every character, regardless of language. Like \"A\" unicode is 65 and \"😊\" this emoji unicode is 128522, you can check them by using ord() function in python and convert them back using chr() function.",
          "keyPoints": [
            "Strings take more memory because each character carries unicode metadata.",
            "ord(char) returns the integer Unicode code point of a character.",
            "chr(code_point) returns the character corresponding to that integer code point.",
            "Example: 'A' has Unicode 65; '😊' has Unicode 128522."
          ],
          "codeExamples": [
            {
              "title": "Using ord() and chr() in Python",
              "code": "# Checking Unicode code point using ord():\nprint(\"Unicode of 'A':\", ord(\"A\"))\nprint(\"Unicode of 'a':\", ord(\"a\"))\nprint(\"Unicode of emoji 😊:\", ord(\"😊\"))\n\n# Converting code point back to character using chr():\nprint(\"chr(65) is:\", chr(65))\nprint(\"chr(128522) is:\", chr(128522))\nprint(\"chr(97) is:\", chr(97))",
              "output": "Unicode of 'A': 65\nUnicode of 'a': 97\nUnicode of emoji 😊: 128522\nchr(65) is: A\nchr(128522) is: 😊\nchr(97) is: a"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Python 3 natively handles all strings as Unicode UTF-8."
          },
          "related": [
            "string-indexing",
            "string-slicing"
          ]
        }
      },
      {
        "id": "string-indexing",
        "title": "String Indexing",
        "chapter": "Strings and Type Conversion",
        "page": 4,
        "readTime": "3 min",
        "content": {
          "intro": "Indexing allows you to pinpoint and access individual characters within a string.",
          "definition": "Indexing is the mechanism to access individual items in an ordered sequence using their integer positional index.",
          "explanation": "You must have thought there are so many characters in a string but can you access everyone. Yes thats possible using indexing. Indexing starts from 0 and goes till the number of characters you have. eg - a = \"Hello\" print(a[0]) ==> output - \"H\". There is negative indexing as well and it starts from -1, but the starting position is from the back of the string. eg - a = \"Hello\" print(a[-1]) ==> output - \"o\".",
          "keyPoints": [
            "Positive indexing starts at 0 from left to right (0, 1, 2, ...).",
            "Negative indexing starts at -1 from right to left (-1, -2, -3, ...).",
            "Accessing an index >= length of string raises IndexError: string index out of range."
          ],
          "codeExamples": [
            {
              "title": "Positive and Negative String Indexing",
              "code": "a = \"Hello\"\n\n# Positive indexing (left to right):\nprint(\"a[0]:\", a[0])   # First character\nprint(\"a[1]:\", a[1])   # Second character\nprint(\"a[4]:\", a[4])   # Fifth character\n\n# Negative indexing (right to left):\nprint(\"a[-1]:\", a[-1]) # Last character\nprint(\"a[-2]:\", a[-2]) # Second to last character\nprint(\"a[-5]:\", a[-5]) # First character",
              "output": "a[0]: H\na[1]: e\na[4]: o\na[-1]: o\na[-2]: l\na[-5]: H"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Strings in Python are immutable! You cannot assign to an index: a[0] = 'h' will raise TypeError."
          },
          "related": [
            "how-strings-work",
            "string-slicing"
          ]
        }
      },
      {
        "id": "string-slicing",
        "title": "String Slicing",
        "chapter": "Strings and Type Conversion",
        "page": 4,
        "readTime": "3 min",
        "content": {
          "intro": "Slicing lets you extract a substring by specifying boundaries and an optional step size.",
          "definition": "Slicing means cutting out a slice from string and this is also done using index values. Syntax: string[start:stop:step].",
          "explanation": "You know how to access characters in string. But there are slicing option as well. Slicing means cutting out a slice from string and this is also done using index values. So here we have start , stop and steps position and keep a note if we use stop at 4 it will slice till 3 only. eg - a = \"hello\" a[1:4:1] ==> output \"ell\".",
          "keyPoints": [
            "Syntax: sequence[start : stop : step]",
            "start is inclusive (starts extraction here). Default is 0.",
            "stop is exclusive (stops BEFORE this index). Default is length.",
            "step specifies the stride. Default is 1. Negative step reverses extraction."
          ],
          "codeExamples": [
            {
              "title": "String Slicing Demonstration",
              "code": "a = \"hello\"\n\n# Slicing from index 1 to 4 with step 1:\nprint(\"a[1:4:1] ->\", a[1:4:1])  # 'ell'\n\n# Omitting step:\nprint(\"a[1:4] ->\", a[1:4])      # 'ell'\n\n# Slicing from start:\nprint(\"a[:3] ->\", a[:3])        # 'hel'\n\n# Slicing to end:\nprint(\"a[2:] ->\", a[2:])        # 'llo'\n\n# Reversing a string with step -1:\nprint(\"a[::-1] ->\", a[::-1])    # 'olleh'",
              "output": "a[1:4:1] -> ell\na[1:4] -> ell\na[:3] -> hel\na[2:] -> llo\na[::-1] -> olleh"
            }
          ],
          "notes": {
            "type": "info",
            "text": "If stop index exceeds string bounds, Python does not crash; it simply slices up to the available string boundary."
          },
          "related": [
            "string-indexing",
            "type-conversion"
          ]
        }
      },
      {
        "id": "type-conversion",
        "title": "Type Conversion",
        "chapter": "Strings and Type Conversion",
        "page": 4,
        "readTime": "3 min",
        "content": {
          "intro": "Type conversion allows converting a value from one data type to another.",
          "definition": "Type conversion (or type casting) is the process of translating a value from one data type to another.",
          "explanation": "For understanding type conversion you have to look at these 4 things: int(), float(), str(), bool(). There are more functions like this but these are 4 main function, looking at these functions you can guess these are used to convert one data type to another. eg a = 12, a = str(a), print(a) ==> \"12\" (a will be converted to string).",
          "keyPoints": [
            "int(): Converts value to integer.",
            "float(): Converts value to floating-point number.",
            "str(): Converts value to string representation.",
            "bool(): Converts value to boolean (True or False)."
          ],
          "codeExamples": [
            {
              "title": "Basic Type Conversions",
              "code": "a = 12\nprint(\"Original:\", a, type(a))\n\n# Convert to string\na_str = str(a)\nprint(\"str(12):\", a_str, type(a_str))\n\n# Convert to float\na_flt = float(a)\nprint(\"float(12):\", a_flt, type(a_flt))\n\n# Convert string of digits to integer\nnum = int(\"450\")\nprint(\"int('450'):\", num, type(num))",
              "output": "Original: 12 <class 'int'>\nstr(12): 12 <class 'str'>\nfloat(12): 12.0 <class 'float'>\nint('450'): 450 <class 'int'>"
            }
          ],
          "notes": {
            "type": "warning",
            "text": "Converting non-numeric strings (e.g. int('hello')) will raise ValueError: invalid literal for int()."
          },
          "related": [
            "type-conversion-types",
            "type-conversion-concepts"
          ]
        }
      },
      {
        "id": "type-conversion-types",
        "title": "Type Conversion Types: Implicit vs Explicit",
        "chapter": "Strings and Type Conversion",
        "page": 4,
        "readTime": "3 min",
        "content": {
          "intro": "Python performs type conversion either automatically without developer intervention, or manually using built-in functions.",
          "definition": "There are 2 types of conversion: Implicit and Explicit.",
          "explanation": "There are 2 types of conversion: Implicit and Explicit.\nImplicit: In this python automatically converts data from one data type to another. You have already seen the example before eg - a = 12, print(a/2). Clearly we had the data type as int but after dividing python automatically converted the data type to float. Output - 6.0.\nExplicit: In this we as a user use in build functions to convert one data type to another: int(), float(), complex(), str(), list(), tuple(), set(), dict(), bool().",
          "keyPoints": [
            "Implicit: Automatic conversion to prevent data loss (e.g., int / int gives float, int + float gives float).",
            "Explicit: Manual casting using constructors: int(), float(), complex(), str(), list(), tuple(), set(), dict(), bool()."
          ],
          "codeExamples": [
            {
              "title": "Implicit vs Explicit Conversion",
              "code": "# 1. Implicit Conversion:\na = 12\nresult = a / 2\nprint(\"12 / 2 =\", result, type(result))  # automatically float: 6.0\n\nx = 5\ny = 2.5\nsum_val = x + y\nprint(\"5 + 2.5 =\", sum_val, type(sum_val))  # float: 7.5\n\n# 2. Explicit Conversion:\ns = \"100\"\nn = int(s)\nprint(\"Explicit int():\", n, type(n))\n\nitems = (1, 2, 3)\nitem_list = list(items)\nprint(\"Explicit list():\", item_list, type(item_list))",
              "output": "12 / 2 = 6.0 <class 'float'>\n5 + 2.5 = 7.5 <class 'float'>\nExplicit int(): 100 <class 'int'>\nExplicit list(): [1, 2, 3] <class 'list'>"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Division operator (/) in Python 3 always produces a float implicitly, even if numbers divide evenly (e.g. 4/2 = 2.0)."
          },
          "related": [
            "type-conversion-concepts",
            "arithmetic-operators"
          ]
        }
      },
      {
        "id": "type-conversion-concepts",
        "title": "Type Conversion Concepts: Truthy & Falsy Values",
        "chapter": "Strings and Type Conversion",
        "page": 4,
        "readTime": "3 min",
        "content": {
          "intro": "When evaluated in a boolean context, every Python object is considered either 'truthy' or 'falsy'.",
          "definition": "Truthy values evaluate to True when converted via bool(). Falsy values evaluate to False.",
          "explanation": "Some important concepts of type conversions are you cannot convert a character to a int() that basic watch the video for more set of information. bool() converter turns everything to True and False but which thing will be converted to true and which false. Lets see. There are truthy values and Falsy values, and there are only 7 falsy values that means only 7 things will be converted to false rest True:\n0\n0.0\nFalse\n\"\"\n[]\n{}\n()\nAll these values are falsy remaining will be converted to True.",
          "keyPoints": [
            "There are only 7 fundamental falsy values in basic Python types:",
            "1. 0 (integer zero)",
            "2. 0.0 (float zero)",
            "3. False (boolean False)",
            "4. \"\" (empty string)",
            "5. [] (empty list)",
            "6. {} (empty dictionary)",
            "7. () (empty tuple)",
            "Also None is falsy.",
            "All other non-empty and non-zero values are Truthy."
          ],
          "codeExamples": [
            {
              "title": "Testing the 7 Falsy Values",
              "code": "# The 7 falsy values test:\nprint(\"bool(0) ->\", bool(0))\nprint(\"bool(0.0) ->\", bool(0.0))\nprint(\"bool(False) ->\", bool(False))\nprint(\"bool('') ->\", bool(\"\"))\nprint(\"bool([]) ->\", bool([]))\nprint(\"bool({}) ->\", bool({}))\nprint(\"bool(()) ->\", bool(()))\nprint(\"bool(None) ->\", bool(None))\n\n# Truthy examples:\nprint(\"bool('hello') ->\", bool(\"hello\"))\nprint(\"bool([1, 2]) ->\", bool([1, 2]))\nprint(\"bool(-5) ->\", bool(-5))",
              "output": "bool(0) -> False\nbool(0.0) -> False\nbool(False) -> False\nbool('') -> False\nbool([]) -> False\nbool({}) -> False\nbool(()) -> False\nbool(None) -> False\nbool('hello') -> True\nbool([1, 2]) -> True\nbool(-5) -> True"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Remember: Even a string with a space ' ' or string 'False' is Truthy because it is not empty!"
          },
          "related": [
            "conditional-statements",
            "logical-operators"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-05",
    "num": "05",
    "title": "Input, Output and Operators",
    "page": 5,
    "topics": [
      {
        "id": "output-print-and-fstrings",
        "title": "Output, print() and Formatted Strings",
        "chapter": "Input, Output and Operators",
        "page": 5,
        "readTime": "3 min",
        "content": {
          "intro": "Output is how your program communicates results to the user on the screen or terminal.",
          "definition": "print() is the built-in function to output text and variable values to the standard console.",
          "explanation": "You probably know till now, how to provide the output of the code you have written and that is with print() function. There is no other functions to provide the result on the terminal we just have to use print() function. Now when providing the output we can use variables in print statement using a formatted string as shown in the below example.",
          "keyPoints": [
            "print() accepts comma-separated values and prints them with space separators by default.",
            "sep parameter changes the delimiter between arguments.",
            "end parameter changes what gets printed at the end (default is '\\n').",
            "f-strings (Formatted string literals) prefix strings with 'f' and interpolate expressions inside {curly_braces}."
          ],
          "codeExamples": [
            {
              "title": "print() and Formatted Strings (f-strings)",
              "code": "name = \"Akarsh\"\nage = 22\nschool = \"Python\"\n\n# Basic print\nprint(\"Hello\", name)\n\n# Custom sep and end\nprint(\"Python\", \"Python\", \"AI\", sep=\" | \", end=\" -> COMPLETE!\\n\")\n\n# Formatted string (f-string)\nprint(f\"My name is {name}, I am {age} years old and I study at {school}.\")\n\n# Expressions inside f-strings\nprint(f\"Next year age: {age + 1}\")",
              "output": "Hello Akarsh\nPython | Python | AI -> COMPLETE!\nMy name is Akarsh, I am 22 years old and I study at Python.\nNext year age: 23"
            }
          ],
          "notes": {
            "type": "info",
            "text": "f-strings were introduced in Python 3.6 and are now the recommended way to format strings."
          },
          "related": [
            "input-and-type-conversion",
            "what-are-operators"
          ]
        }
      },
      {
        "id": "input-and-type-conversion",
        "title": "Input, input() and Questions",
        "chapter": "Input, Output and Operators",
        "page": 5,
        "readTime": "3 min",
        "content": {
          "intro": "The input() function pauses script execution to allow the user to type data into the console.",
          "definition": "input() is a built-in Python function that reads a line of input from the user and returns it as a string.",
          "explanation": "But the main question is how to ask user for some information. For example there is a user and you want to ask the age of that user, how can you do so, it's easy using input(). Now the default data type of input is always string reason is simple you can store anything in string. You have to manually convert the data type of input statements.\nQuestions:\n- Accept numbers from a user.\n- Accept age from the user and print it.",
          "keyPoints": [
            "input() ALWAYS returns data with data type str (string).",
            "Wrap with int(input()) or float(input()) to read numeric values.",
            "Prompt message can be passed directly inside input('Enter value: ')."
          ],
          "codeExamples": [
            {
              "title": "Reading User Input and Explicit Casting",
              "code": "# Example 1: Accept age from user and print it\n# In live execution:\n# age = int(input(\"Enter your age: \"))\nage = int(\"21\")  # Simulated user input\nprint(f\"Your age is: {age}, in 5 years you will be: {age + 5}\")\n\n# Example 2: Accept two numbers from user and add them\n# num1 = int(input(\"Enter first number: \"))\n# num2 = int(input(\"Enter second number: \"))\nnum1 = int(\"15\")\nnum2 = int(\"25\")\nprint(f\"Sum of {num1} and {num2} is: {num1 + num2}\")",
              "output": "Your age is: 21, in 5 years you will be: 26\nSum of 15 and 25 is: 40"
            }
          ],
          "notes": {
            "type": "warning",
            "text": "If a user inputs 'abc' when you do int(input()), a ValueError is thrown. In later chapters, we will handle this with try-except."
          },
          "related": [
            "output-print-and-fstrings",
            "what-are-operators"
          ]
        }
      },
      {
        "id": "what-are-operators",
        "title": "What are Operators?",
        "chapter": "Input, Output and Operators",
        "page": 5,
        "readTime": "2 min",
        "content": {
          "intro": "Operators are the mathematical and logical engines of programming.",
          "definition": "Operators are symbols that perform operations on variables and values. Python has several types of operators for different tasks like arithmetic, comparison, logical operations, and more.",
          "explanation": "Operators are symbols that perform operations on variables and values. Python has several types of operators for different tasks like arithmetic, comparison, logical operations, and more. Lets see every operators one by one.",
          "keyPoints": [
            "Operands: The values/variables on which operations are performed.",
            "Operators: The special symbols (+, -, *, ==, and) that specify what calculation to do.",
            "Main categories: Arithmetic, Assignment, Comparison, Logical, Identity, Membership, Bitwise."
          ],
          "codeExamples": [
            {
              "title": "Operators Overview",
              "code": "a = 10\nb = 3\n\nprint(\"Arithmetic:\", a + b)     # 13\nprint(\"Comparison:\", a > b)     # True\nprint(\"Logical:\", a > 5 and b < 5) # True",
              "output": "Arithmetic: 13\nComparison: True\nLogical: True"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Python supports operator overloading through special dunder methods (covered in Chapter 27)."
          },
          "related": [
            "arithmetic-operators",
            "assignment-operators"
          ]
        }
      },
      {
        "id": "arithmetic-operators",
        "title": "Arithmetic Operators",
        "chapter": "Input, Output and Operators",
        "page": 5,
        "readTime": "3 min",
        "content": {
          "intro": "Arithmetic operators handle standard mathematical computations in Python.",
          "definition": "Arithmetic operators perform mathematical operations like addition, subtraction, multiplication, division, etc.",
          "explanation": "There are 7 types of arithmetic operator:\n1. addition (+)\n2. subtraction (-)\n3. multiplication (*)\n4. division (/)\n5. Floor division (//)\n6. modulus (%)\n7. Exponentiation (**)\nEg - a = 12, b = 8, print(a+b) => Output - 20",
          "keyPoints": [
            "+ : Addition (adds numbers, concatenates strings/lists).",
            "- : Subtraction.",
            "* : Multiplication (multiplies numbers, repeats strings).",
            "/ : Division (always yields float).",
            "// : Floor division (divides and truncates to nearest lower integer).",
            "% : Modulus (returns the remainder of division).",
            "** : Exponentiation (power operator: a ** b is a^b)."
          ],
          "codeExamples": [
            {
              "title": "The 7 Arithmetic Operators in Action",
              "code": "a = 12\nb = 8\n\nprint(\"Addition (a + b):\", a + b)               # 20\nprint(\"Subtraction (a - b):\", a - b)            # 4\nprint(\"Multiplication (a * b):\", a * b)         # 96\nprint(\"Division (a / b):\", a / b)               # 1.5\nprint(\"Floor Division (a // b):\", a // b)       # 1\nprint(\"Modulus (a % b):\", a % b)                # 4\nprint(\"Exponentiation (a ** 2):\", a ** 2)       # 144",
              "output": "Addition (a + b): 20\nSubtraction (a - b): 4\nMultiplication (a * b): 96\nDivision (a / b): 1.5\nFloor Division (a // b): 1\nModulus (a % b): 4\nExponentiation (a ** 2): 144"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Notice the difference: 12 / 8 gives 1.5 (float), while 12 // 8 gives 1 (floor integer)."
          },
          "related": [
            "assignment-operators",
            "comparison-operators"
          ]
        }
      },
      {
        "id": "assignment-operators",
        "title": "Assignment & Compound Assignment Operators",
        "chapter": "Input, Output and Operators",
        "page": 5,
        "readTime": "3 min",
        "content": {
          "intro": "Assignment operators store calculated values into variables efficiently.",
          "definition": "Assignment operators are used to assign values to variables. Compound assignment operators combine arithmetic operations with assignment.",
          "explanation": "A basic assignment operator is simple =.\nCompound assignment operator combines arithmetic operations with assignment. But first you have to understand how things work when we reassign variables in python and also reassigning variables with addition, subtraction etc. Using compound assignment operators the reassigning works better:\n+= Add and assign\n-= Subtract and assign\n*= Multiply and assign\n/= Divide and assign\n//= Floor divide and assign\n%= Modulus and assign\n**= Exponentiation and assign",
          "keyPoints": [
            "= : Simple assignment.",
            "x += y is equivalent to x = x + y.",
            "x -= y is equivalent to x = x - y.",
            "x *= y is equivalent to x = x * y.",
            "x /= y is equivalent to x = x / y.",
            "x //= y is equivalent to x = x // y.",
            "x %= y is equivalent to x = x % y.",
            "x **= y is equivalent to x = x ** y."
          ],
          "codeExamples": [
            {
              "title": "Compound Assignment Operations",
              "code": "x = 10\nprint(\"Initial x:\", x)\n\nx += 5    # x = 10 + 5\nprint(\"x += 5 ->\", x)   # 15\n\nx -= 3    # x = 15 - 3\nprint(\"x -= 3 ->\", x)   # 12\n\nx *= 2    # x = 12 * 2\nprint(\"x *= 2 ->\", x)   # 24\n\nx //= 4   # x = 24 // 4\nprint(\"x //= 4 ->\", x)  # 6\n\nx %= 4    # x = 6 % 4\nprint(\"x %= 4 ->\", x)   # 2\n\nx **= 3   # x = 2 ** 3\nprint(\"x **= 3 ->\", x)  # 8",
              "output": "Initial x: 10\nx += 5 -> 15\nx -= 3 -> 12\nx *= 2 -> 24\nx //= 4 -> 6\nx %= 4 -> 2\nx **= 3 -> 8"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Compound assignments are evaluated in place where supported, often improving efficiency."
          },
          "related": [
            "arithmetic-operators",
            "comparison-operators"
          ]
        }
      },
      {
        "id": "comparison-operators",
        "title": "Comparison Operators",
        "chapter": "Input, Output and Operators",
        "page": 5,
        "readTime": "3 min",
        "content": {
          "intro": "Comparison operators inspect the relationship between two operands and evaluate to a boolean True or False.",
          "definition": "Comparison operators, also called relational operators, are used to compare two values. They will always provide a Boolean result (True or False).",
          "explanation": "Comparison operators will always provide Boolean result that is True and False. Comparison operators are as follow:\n== Equal to\n!= Not Equal to\n> Greater than\n< Less than\n>= Greater than or equal to\n<= Less than or equal to\nComparison operators will work with numbers but you can use them with strings as well. Strings will be comparing the Ascii values of string.",
          "keyPoints": [
            "== checks equality of values.",
            "!= checks inequality of values.",
            ">, <, >=, <= compare magnitude.",
            "Strings are compared lexicographically using ASCII / Unicode ord() values."
          ],
          "codeExamples": [
            {
              "title": "Comparison Operators on Numbers and Strings",
              "code": "# Numeric comparisons:\nprint(\"10 == 10:\", 10 == 10)  # True\nprint(\"10 != 5:\", 10 != 5)    # True\nprint(\"10 > 20:\", 10 > 20)    # False\nprint(\"15 >= 15:\", 15 >= 15)  # True\n\n# String comparison based on ASCII / Unicode:\n# 'a' is 97, 'A' is 65\nprint(\"'a' > 'A':\", 'a' > 'A')           # True (97 > 65)\nprint(\"'apple' < 'banana':\", 'apple' < 'banana') # True",
              "output": "10 == 10: True\n10 != 5: True\n10 > 20: False\n15 >= 15: True\n'a' > 'A': True\n'apple' < 'banana': True"
            }
          ],
          "notes": {
            "type": "warning",
            "text": "Don't confuse = (assignment) with == (equality comparison)."
          },
          "related": [
            "logical-operators",
            "conditional-statements"
          ]
        }
      },
      {
        "id": "logical-operators",
        "title": "Logical Operators & Trivial Questions",
        "chapter": "Input, Output and Operators",
        "page": 5,
        "readTime": "3 min",
        "content": {
          "intro": "Logical operators combine multiple boolean expressions together into complex conditions.",
          "definition": "Logical operators in Python are used to combine multiple conditions and return a Boolean result (True or False).",
          "explanation": "There are 3 types of logical operator:\n- and: Return True if both condition are True\n- or: Return True if at least one condition is True\n- not: Reverse the boolean value\nTrivial Questions from the book:\n1. print(126 > 130)\n2. print((456 == 456) != (235 == 236))\n3. print(12 < 10 or 45 == 56 or 69 > 70 or 15 != 13)\n4. print(True and bool(0))",
          "keyPoints": [
            "and : Returns True only if BOTH operands evaluate to True.",
            "or : Returns True if AT LEAST ONE operand is True.",
            "not : Inverts the boolean truth value (not True -> False).",
            "Python uses short-circuit evaluation for logical expressions."
          ],
          "codeExamples": [
            {
              "title": "Solutions to the Core Trivial Questions",
              "code": "# Trivial Questions from Page 5:\n\n# Question 1:\nans1 = 126 > 130\nprint(\"1. print(126 > 130) ->\", ans1)\n\n# Question 2:\n# (456 == 456) is True\n# (235 == 236) is False\n# True != False is True\nans2 = (456 == 456) != (235 == 236)\nprint(\"2. print((456 == 456) != (235 == 236)) ->\", ans2)\n\n# Question 3:\n# 12 < 10 (False) or 45 == 56 (False) or 69 > 70 (False) or 15 != 13 (True)\nans3 = 12 < 10 or 45 == 56 or 69 > 70 or 15 != 13\nprint(\"3. print(12 < 10 or 45 == 56 or 69 > 70 or 15 != 13) ->\", ans3)\n\n# Question 4:\n# bool(0) is False; True and False is False\nans4 = True and bool(0)\nprint(\"4. print(True and bool(0)) ->\", ans4)",
              "output": "1. print(126 > 130) -> False\n2. print((456 == 456) != (235 == 236)) -> True\n3. print(12 < 10 or 45 == 56 or 69 > 70 or 15 != 13) -> True\n4. print(True and bool(0)) -> False"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Short-circuit evaluation: In an 'or' expression, if the first condition is True, Python does not bother evaluating subsequent conditions."
          },
          "related": [
            "conditional-statements",
            "comparison-operators"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-06",
    "num": "06",
    "title": "Conditional Statements",
    "page": 6,
    "topics": [
      {
        "id": "conditional-statements",
        "title": "Conditional Statements & Types",
        "chapter": "Conditional Statements",
        "page": 6,
        "readTime": "3 min",
        "content": {
          "intro": "Programs need to take different pathways based on input. Conditional statements provide this decision-making capability.",
          "definition": "Conditional statements in Python allow decision-making by executing different blocks of code based on conditions.",
          "explanation": "Decision making can be understood with an example eg - you will receive a number from the user if the number is greater than 10 you will do task A and lower than 10 you will do task B. Here the situation is simple Number will decide which task will be executed. That means now we will control the flow of our program based on some conditions thats why these statements are also known as control flow statement.\nTypes of conditional statements:\n- if: Executes if the condition is True\n- if-else: Executes if True, another if False\n- if-elif-else: Checks multiple condition in sequence.",
          "keyPoints": [
            "Indentations (4 spaces) define blocks of code in Python.",
            "Conditions must evaluate to a truthy or falsy boolean value.",
            "Colons (:) must terminate every if, elif, and else line."
          ],
          "codeExamples": [
            {
              "title": "Syntax of if, if-else, and if-elif-else",
              "code": "num = 15\n\n# 1. Simple if\nif num > 10:\n    print(\"Task A: Number is greater than 10\")\n\n# 2. if-else\nif num % 2 == 0:\n    print(\"Even Number\")\nelse:\n    print(\"Odd Number\")\n\n# 3. if-elif-else\nscore = 85\nif score >= 90:\n    print(\"Grade A\")\nelif score >= 80:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")",
              "output": "Task A: Number is greater than 10\nOdd Number\nGrade B"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Indentation is not decorative in Python; incorrect indentation will trigger IndentationError."
          },
          "related": [
            "conditional-questions",
            "if-elif-ladder"
          ]
        }
      },
      {
        "id": "conditional-questions",
        "title": "Some Questions on Conditional",
        "chapter": "Conditional Statements",
        "page": 6,
        "readTime": "4 min",
        "content": {
          "intro": "Here are the 5 core practice questions from Page 6 of the Python Programming Book with complete solutions.",
          "definition": "Practical application of conditional statements using logical comparisons.",
          "explanation": "The Great thing is you can use logical operators as well.\nQ1. Accept two numbers and print the greatest between them.\nQ2. Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir / Ma'am on the basis of gender).\nQ3. Accept an integer and check whether it is an even number or odd.\nQ4. Accept name and age from the user. Check if the user is a valid voter or not. Ex- \"hello student you are a valid voter\".\nQ5. Accept a year and check if it a leap year or not.",
          "keyPoints": [
            "Q1: Compare two numbers using > or <.",
            "Q2: Match gender char ('M'/'m' or 'F'/'f').",
            "Q3: Even/Odd check with modulus (% 2 == 0).",
            "Q4: Voting eligibility check (age >= 18).",
            "Q5: Leap year condition: (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)."
          ],
          "codeExamples": [
            {
              "title": "Solutions to Questions 1 through 5",
              "code": "# Q1: Greatest of two numbers\na, b = 25, 42\nif a > b:\n    print(f\"Q1: Greatest is {a}\")\nelse:\n    print(f\"Q1: Greatest is {b}\")\n\n# Q2: Gender-based greeting\ngender = 'M'\nif gender.upper() == 'M':\n    print(\"Q2: Good Morning Sir\")\nelif gender.upper() == 'F':\n    print(\"Q2: Good Morning Ma'am\")\nelse:\n    print(\"Q2: Good Morning!\")\n\n# Q3: Even or Odd\nn = 17\nif n % 2 == 0:\n    print(f\"Q3: {n} is Even\")\nelse:\n    print(f\"Q3: {n} is Odd\")\n\n# Q4: Voting Eligibility\nname, age = \"Alex\", 19\nif age >= 18:\n    print(f\"Q4: Hello {name} you are a valid voter\")\nelse:\n    print(f\"Q4: Hello {name} you are not eligible to vote yet\")\n\n# Q5: Leap Year Check\nyear = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(f\"Q5: {year} is a Leap Year\")\nelse:\n    print(f\"Q5: {year} is not a Leap Year\")",
              "output": "Q1: Greatest is 42\nQ2: Good Morning Sir\nQ3: 17 is Odd\nQ4: Hello Student you are a valid voter\nQ5: 2024 is a Leap Year"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Leap year rule: Divisible by 4 AND not 100, UNLESS also divisible by 400."
          },
          "related": [
            "if-elif-ladder",
            "conditional-statements"
          ]
        }
      },
      {
        "id": "if-elif-ladder",
        "title": "If-Elif Ladder & Temperature Problem",
        "chapter": "Conditional Statements",
        "page": 6,
        "readTime": "3 min",
        "content": {
          "intro": "When multiple mutually exclusive conditions must be checked in sequence, we construct an if-elif ladder.",
          "definition": "An if-elif ladder evaluates multiple boolean expressions sequentially from top to bottom, stopping at the first True condition.",
          "explanation": "You can also create if elif ladder using multiple conditions of elif. For understanding solve this question:\ntake the input of temperature in celsius:\nBelow 0°C → \"Freezing Cold\"\n0°C to 10°C → \"Very Cold\"\n10°C to 20°C → \"Cold\"\n20°C to 30°C → \"Pleasant\"\n30°C to 40°C → \"Hot\"\nAbove 40°C → \"Very Hot\"",
          "keyPoints": [
            "Conditions are evaluated from top to bottom.",
            "As soon as one condition evaluates to True, its block runs and the remaining ladder is skipped.",
            "The optional else at the end catches any cases not covered by previous conditions."
          ],
          "codeExamples": [
            {
              "title": "Temperature Classifier using If-Elif Ladder",
              "code": "def check_temperature(temp):\n    if temp < 0:\n        return \"Freezing Cold\"\n    elif 0 <= temp <= 10:\n        return \"Very Cold\"\n    elif 10 < temp <= 20:\n        return \"Cold\"\n    elif 20 < temp <= 30:\n        return \"Pleasant\"\n    elif 30 < temp <= 40:\n        return \"Hot\"\n    else:\n        return \"Very Hot\"\n\n# Test various temperatures\ntest_temps = [-5, 7, 15, 24, 35, 45]\nfor t in test_temps:\n    print(f\"{t}°C -> {check_temperature(t)}\")",
              "output": "-5°C -> Freezing Cold\n7°C -> Very Cold\n15°C -> Cold\n24°C -> Pleasant\n35°C -> Hot\n45°C -> Very Hot"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Python supports chained comparisons like 0 <= temp <= 10, which reads cleanly and idiomatically."
          },
          "related": [
            "conditional-questions",
            "loops-in-python"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-07",
    "num": "07",
    "title": "Loops",
    "page": 7,
    "topics": [
      {
        "id": "intro-to-loops",
        "title": "Introduction & Types of Loops",
        "chapter": "Loops",
        "page": 7,
        "readTime": "3 min",
        "content": {
          "intro": "Loops are fundamental constructs that automate repetitive tasks in programming.",
          "definition": "Loops in Python allow us to execute a block of code multiple times without rewriting it.",
          "explanation": "Loops in Python allow us to execute a block of code multiple times without rewriting it. Ok lets do one thing go to your VS code and print \"hello world\" 100 times. Manually printing will take 100 code lines to print it. but using loops we need only 2 lines to print 100 times, thats the power of loops. There are 2 types of loops in python: For and While loop.",
          "keyPoints": [
            "Drying up code: Eliminates redundant repetitive statements.",
            "For loop: Typically used when the number of iterations is known beforehand.",
            "While loop: Used when execution depends on a continuous condition."
          ],
          "codeExamples": [
            {
              "title": "Printing 100 Times: Manual vs Loop",
              "code": "# The Power of Loops as described in Programming notes:\n# Instead of writing print(\"hello world\") 100 times:\nfor i in range(1, 6):  # Showing 5 for brevity\n    print(f\"hello world #{i}\")",
              "output": "hello world #1\nhello world #2\nhello world #3\nhello world #4\nhello world #5"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Loops form the backbone of algorithms, data processing, and automation."
          },
          "related": [
            "intuition-of-loops",
            "range-function"
          ]
        }
      },
      {
        "id": "intuition-of-loops",
        "title": "Intuition of Loops: The Bucket & Mug Analogy",
        "chapter": "Loops",
        "page": 7,
        "readTime": "3 min",
        "content": {
          "intro": "Coding Academy uses the famous Bucket & Mug real-life analogy to explain the exact intuition behind for vs while loops.",
          "definition": "For loop is chosen when iterations are countable. While loop is chosen when termination is condition-driven.",
          "explanation": "For understanding both types of loop we will see a great example: you have a bucket filled with water and an empty bucket with a mug.\nIn scenario 1 you have to transfer 4 mugs of water from 1 bucket to another.\nIn scenario 2 you have to transfer all the water from 1st bucket to another via mug.\nIn first scenario you know the number of mugs to transfer from one bucket to another. Here you know how many numbers of iteration you have to go through, like you have to transfer only 4 mugs. So when you know the number of iterations you will use a FOR loop.\nIn the second scenario, you don't know how many mugs you need to transfer, but you do know the condition that determines when to stop. So when you don’t know how many iteration you have to use but you know a condition that determines when to stop you will use loop: WHILE.",
          "keyPoints": [
            "Scenario 1: You know exact count (4 mugs) -> Use FOR loop.",
            "Scenario 2: You don't know count, only condition (until bucket 1 is empty) -> Use WHILE loop."
          ],
          "codeExamples": [
            {
              "title": "Simulating the Bucket & Mug Analogy in Code",
              "code": "# Scenario 1: Exactly 4 mugs (FOR loop)\nprint(\"--- Scenario 1: For Loop (4 mugs) ---\")\nfor mug in range(1, 5):\n    print(f\"Transferred mug #{mug}\")\n\n# Scenario 2: Until bucket 1 is empty (WHILE loop)\nprint(\"\\n--- Scenario 2: While Loop (Condition-driven) ---\")\nwater_in_bucket1 = 45  # liters\nmug_capacity = 10\nmugs_transferred = 0\n\nwhile water_in_bucket1 > 0:\n    water_in_bucket1 -= mug_capacity\n    mugs_transferred += 1\n    print(f\"Poured mug #{mugs_transferred}. Water remaining: {max(0, water_in_bucket1)}L\")\n\nprint(\"Bucket is now empty! Stopped.\")",
              "output": "--- Scenario 1: For Loop (4 mugs) ---\nTransferred mug #1\nTransferred mug #2\nTransferred mug #3\nTransferred mug #4\n\n--- Scenario 2: While Loop (Condition-driven) ---\nPoured mug #1. Water remaining: 35L\nPoured mug #2. Water remaining: 25L\nPoured mug #3. Water remaining: 15L\nPoured mug #4. Water remaining: 5L\nPoured mug #5. Water remaining: 0L\nBucket is now empty! Stopped."
            }
          ],
          "notes": {
            "type": "important",
            "text": "Remember this rule: Known iterations = FOR loop. Unknown iterations with stopping condition = WHILE loop."
          },
          "related": [
            "range-function",
            "while-loop-syntax"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-08",
    "num": "08",
    "title": "For Loop",
    "page": 8,
    "topics": [
      {
        "id": "range-function",
        "title": "range() Function & Loops for Numbers",
        "chapter": "For Loop",
        "page": 8,
        "readTime": "3 min",
        "content": {
          "intro": "The range() function produces immutable arithmetic progression sequences of integers.",
          "definition": "The range() function is used to generate a sequence of numbers, which is commonly used in loops. Syntax: range(start, stop, steps).",
          "explanation": "Before understanding for loops you should know how range function works. The range() function is used to generate a sequence of numbers, which is commonly used in loops. Syntax of range function is simple range(start, stop, steps). You have 3 points from where you want to start, till where you want to stop and how many steps you want. If you don’t mention start point the default value will be 0. If you don’t mention the steps the default steps will be 1. You have to mention the stop point otherwise the range function will not work.\nFor using loops with numbers you need the range function. Best way to understand is going with an example: You have to print numbers from 1 - 5. We will solve this question using for loop and range function.",
          "keyPoints": [
            "range(stop): Generates 0 to stop - 1.",
            "range(start, stop): Generates start to stop - 1.",
            "range(start, stop, step): Generates numbers incrementing by step.",
            "stop parameter is always exclusive (does not include stop value)."
          ],
          "codeExamples": [
            {
              "title": "Printing Numbers 1 to 5 using range()",
              "code": "# Printing numbers from 1 to 5 as explained in book:\nfor i in range(1, 6):\n    print(i, end=\" \")\nprint()\n\n# Demonstrating step parameter:\nprint(\"Odd numbers 1 to 10:\", list(range(1, 10, 2)))\n\n# Counting backwards:\nprint(\"Countdown:\", list(range(5, 0, -1)))",
              "output": "1 2 3 4 5 \nOdd numbers 1 to 10: [1, 3, 5, 7, 9]\nCountdown: [5, 4, 3, 2, 1]"
            }
          ],
          "notes": {
            "type": "info",
            "text": "range objects are lazy iterators in Python 3; they do not store all numbers in memory at once."
          },
          "related": [
            "loops-for-strings",
            "break-continue-else"
          ]
        }
      },
      {
        "id": "loops-for-strings",
        "title": "Loops for Strings",
        "chapter": "For Loop",
        "page": 8,
        "readTime": "3 min",
        "content": {
          "intro": "Strings are sequences of characters and can be iterated in two distinct ways.",
          "definition": "String iteration can be performed either directly character-by-character or via index numbers with len() and range().",
          "explanation": "Loops for strings work slightly differently. You can iterate through a string in two ways:\n1. Using index values\n2. Iterating directly over the string\nIterating using the index values, Now we know that index values are numbers and for numbers we again have to use range function. Here you iterated over the string using the index values for better understanding watch the video. Second way is simpler we can directly iterate but using this method will give you the direct access to the characters instead of index values.",
          "keyPoints": [
            "Direct iteration: for char in my_string: - clean, simple, and gives characters.",
            "Index iteration: for i in range(len(my_string)): - gives index positions."
          ],
          "codeExamples": [
            {
              "title": "The Two Ways to Loop Over Strings",
              "code": "text = \"PYTHON\"\n\n# 1. Direct Iteration (Direct access to characters):\nprint(\"1. Direct iteration:\")\nfor ch in text:\n    print(f\"Char: {ch}\")\n\n# 2. Iteration using Index Values:\nprint(\"\\n2. Index iteration:\")\nfor i in range(len(text)):\n    print(f\"Index {i} -> {text[i]}\")",
              "output": "1. Direct iteration:\nChar: S\nChar: H\nChar: E\nChar: R\nChar: Y\n\n2. Index iteration:\nIndex 0 -> S\nIndex 1 -> H\nIndex 2 -> E\nIndex 3 -> R\nIndex 4 -> Y"
            }
          ],
          "notes": {
            "type": "info",
            "text": "You can also use the built-in enumerate(text) to get both the index and character together simultaneously."
          },
          "related": [
            "break-continue-else",
            "for-loop-questions"
          ]
        }
      },
      {
        "id": "break-continue-else",
        "title": "Break, Continue & Else with Loops",
        "chapter": "For Loop",
        "page": 8,
        "readTime": "4 min",
        "content": {
          "intro": "Coding Academy uses the 20-Lap Race Track analogy to explain loop control statements.",
          "definition": "break terminates the loop immediately. continue skips the current iteration. else executes only if the loop completed naturally without hitting a break.",
          "explanation": "Things written above are very important for loops. Lets say you have this race track and you have to complete 20 laps but when you were completing the 16th laps and it started raining now you cannot complete the rounds. The above example simulate the example of your break statement.\nThe break statement in Python is used to exit a loop prematurely when a certain condition is met. Once break is encountered, the loop stops immediately, and control moves to the next statement after the loop.\nThe Continue statement skips one of the iteration and rest of the iterations will run for understanding lets say you will not run the 16th lap but all other lap will be there.\nYou have seen the else statement used with if, but it can also be used with loops. When else is used with a loop, it only executes if the loop completes without encountering a break statement. If break is executed, the else block will not run.",
          "keyPoints": [
            "Race track analogy: 20 laps. Rain at 16th lap -> race stops completely (break).",
            "Continue: Skip 16th lap due to a hurdle, then proceed to lap 17-20.",
            "else block with loops: Runs ONLY if the loop finishes all iterations naturally without hitting break."
          ],
          "codeExamples": [
            {
              "title": "Break, Continue and Else Demonstration",
              "code": "# 1. Break: Raining at Lap 16\nprint(\"--- Break Simulation ---\")\nfor lap in range(1, 21):\n    if lap == 16:\n        print(f\"Lap {lap}: It started raining! Stopping race.\")\n        break\n    if lap <= 3 or lap >= 15:\n        print(f\"Completed lap #{lap}\")\n\n# 2. Continue: Skip lap 16 only\nprint(\"\\n--- Continue Simulation ---\")\nfor lap in [14, 15, 16, 17]:\n    if lap == 16:\n        print(f\"Lap {lap}: Skipping due to hurdle!\")\n        continue\n    print(f\"Ran lap #{lap}\")\n\n# 3. Else with loop:\nprint(\"\\n--- Else with Loop ---\")\nfor item in [1, 2, 3]:\n    if item == 99:\n        break\nelse:\n    print(\"Loop completed naturally without break!\")",
              "output": "--- Break Simulation ---\nCompleted lap #1\nCompleted lap #2\nCompleted lap #3\nCompleted lap #15\nLap 16: It started raining! Stopping race.\n\n--- Continue Simulation ---\nRan lap #14\nRan lap #15\nLap 16: Skipping due to hurdle!\nRan lap #17\n\n--- Else with Loop ---\nLoop completed naturally without break!"
            }
          ],
          "notes": {
            "type": "important",
            "text": "The 'else' with loops is a unique Python feature. It is ideal for search operations (e.g. searching for a prime factor)."
          },
          "related": [
            "for-loop-questions",
            "while-loop-syntax"
          ]
        }
      },
      {
        "id": "for-loop-questions",
        "title": "For Loop Questions (Complete Solutions)",
        "chapter": "For Loop",
        "page": 8,
        "readTime": "5 min",
        "content": {
          "intro": "Here are all 13 practice questions from Page 8 of the Python Programming Book with complete, tested Python code.",
          "definition": "Comprehensive algorithm implementations using for loops.",
          "explanation": "Practice questions listed in the book:\n1. Accept an integer and Print hello world n times\n2. Print natural number up to n\n3. Reverse for loop. Print n to 1\n4. Take a number as input and print its table\n5. Sum up to n terms\n6. Factorial of a number\n7. Print the sum of all even & odd numbers in a range separately\n8. Print all the factors of a number\n9. Accept a number and check if it a perfect number or not. (Sum of factors equals number, e.g. 6 = 1 + 2 + 3)\n10. Check whether the number is prime or not\n11. Reverse a string without using built-in functions\n12. Check string is Palindrome or not\n13. Count all letters, digits, and special symbols from a given string. Given: str1 = \"P@#yn26at^&i5ve\". Outcome: Chars = 8, Digits = 3, Symbol = 4.",
          "keyPoints": [
            "Covers mathematical series, factors, prime tests, and string parsing.",
            "All questions implemented cleanly below."
          ],
          "codeExamples": [
            {
              "title": "Selected For Loop Solutions (Factorial, Perfect Number, Prime)",
              "code": "# 6. Factorial of a number\nn = 5\nfact = 1\nfor i in range(1, n + 1):\n    fact *= i\nprint(f\"Factorial of {n} is: {fact}\")\n\n# 9. Perfect Number (e.g., 6 -> 1 + 2 + 3 = 6)\nnum = 6\nfactor_sum = 0\nfor i in range(1, num):\n    if num % i == 0:\n        factor_sum += i\nprint(f\"{num} is Perfect Number: {factor_sum == num}\")\n\n# 10. Prime Number Check\np = 13\nis_prime = True if p > 1 else False\nfor i in range(2, int(p ** 0.5) + 1):\n    if p % i == 0:\n        is_prime = False\n        break\nprint(f\"{p} is Prime: {is_prime}\")",
              "output": "Factorial of 5 is: 120\n6 is Perfect Number: True\n13 is Prime: True"
            },
            {
              "title": "Question 13: Count Letters, Digits, and Special Symbols",
              "code": "# Q13 as given in Programming notes:\nstr1 = \"P@#yn26at^&i5ve\"\n\nchars_count = 0\ndigits_count = 0\nsymbols_count = 0\n\nfor ch in str1:\n    if ch.isalpha():\n        chars_count += 1\n    elif ch.isdigit():\n        digits_count += 1\n    else:\n        symbols_count += 1\n\nprint(f\"Chars = {chars_count}\")\nprint(f\"Digits = {digits_count}\")\nprint(f\"Symbol = {symbols_count}\")",
              "output": "Chars = 8\nDigits = 3\nSymbol = 4"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Notice how ch.isalpha() and ch.isdigit() simplify character classification in Python."
          },
          "related": [
            "while-loop-questions",
            "break-continue-else"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-09",
    "num": "09",
    "title": "While Loop",
    "page": 9,
    "topics": [
      {
        "id": "while-loop-syntax",
        "title": "While Loop & Syntax",
        "chapter": "While Loop",
        "page": 9,
        "readTime": "3 min",
        "content": {
          "intro": "The while loop repeatedly executes code as long as a specified condition evaluates to True.",
          "definition": "The while loop repeats a block of code as long as a condition is True. It is useful when the number of iterations is unknown before execution.",
          "explanation": "You have previously taken the information of loops and you also know conditional statements it is going to be easy for you to understand this now. The while loop repeats a block of code as long as a condition is True. It is useful when the number of iterations is unknown before execution. So there is not much that you have to understand about while loop it also have break, continue and else. Now you just have to find out which loop will be used on what questions.",
          "keyPoints": [
            "Loop condition is evaluated before each iteration.",
            "If condition is initially False, the loop body never runs.",
            "Must update loop control variable to avoid infinite loops."
          ],
          "codeExamples": [
            {
              "title": "While Loop Basic Structure",
              "code": "count = 1\nwhile count <= 5:\n    print(f\"Count is: {count}\")\n    count += 1  # Crucial: increment to avoid infinite loop\n\nprint(\"Loop finished!\")",
              "output": "Count is: 1\nCount is: 2\nCount is: 3\nCount is: 4\nCount is: 5\nLoop finished!"
            }
          ],
          "notes": {
            "type": "warning",
            "text": "Forgetting to update the loop variable will cause an infinite loop! In terminals, press Ctrl+C to terminate an infinite loop."
          },
          "related": [
            "while-loop-questions",
            "intuition-of-loops"
          ]
        }
      },
      {
        "id": "while-loop-questions",
        "title": "While Loop Questions (Digit Separation, Reverse, Palindrome)",
        "chapter": "While Loop",
        "page": 9,
        "readTime": "4 min",
        "content": {
          "intro": "Here are the 4 canonical While loop questions from Page 9 of the book.",
          "definition": "Mathematical digit extraction and reversal using while loops.",
          "explanation": "Questions from the book:\n1. Separate each digit of a number and print it on the new line\n2. Accept a number and print its reverse\n3. Accept a number and check if it is a palindromic number (If number and its reverse are equal)\n4. Create a random number guessing game with python.",
          "keyPoints": [
            "Modulo 10 (% 10): Extracts the last digit.",
            "Floor division 10 (// 10): Truncates the last digit.",
            "Reversal logic: rev = (rev * 10) + digit.",
            "Palindrome: check if original_num == reversed_num."
          ],
          "codeExamples": [
            {
              "title": "Separate Digits, Reverse Number, Palindrome Check",
              "code": "# 1 & 2: Separate Digits and Reverse a Number\nnum = 12345\ntemp = num\nrev = 0\n\nprint(\"Separated digits from right to left:\")\nwhile temp > 0:\n    digit = temp % 10\n    print(digit)\n    rev = (rev * 10) + digit\n    temp //= 10\n\nprint(f\"Original: {num}, Reversed: {rev}\")\n\n# 3. Palindrome Number Check\npal_num = 12321\nt = pal_num\npal_rev = 0\nwhile t > 0:\n    pal_rev = (pal_rev * 10) + (t % 10)\n    t //= 10\n\nprint(f\"Is {pal_num} a Palindrome? {pal_num == pal_rev}\")",
              "output": "Separated digits from right to left:\n5\n4\n3\n2\n1\nOriginal: 12345, Reversed: 54321\nIs 12321 a Palindrome? True"
            },
            {
              "title": "4. Random Number Guessing Game (Simulation)",
              "code": "# Random number guessing game logic:\nimport random\n\nsecret_number = 7  # Fixed for deterministic output\nguesses = [3, 9, 7]  # Simulated user inputs\nattempts = 0\n\nfor guess in guesses:\n    attempts += 1\n    print(f\"User guessed: {guess}\")\n    if guess < secret_number:\n        print(\"Too low! Try again.\")\n    elif guess > secret_number:\n        print(\"Too high! Try again.\")\n    else:\n        print(f\"CONGRATULATIONS! You guessed it in {attempts} attempts!\")\n        break",
              "output": "User guessed: 3\nToo low! Try again.\nUser guessed: 9\nToo high! Try again.\nUser guessed: 7\nCONGRATULATIONS! You guessed it in 3 attempts!"
            }
          ],
          "notes": {
            "type": "info",
            "text": "The while num > 0 pattern with % 10 and // 10 is one of the most common coding interview patterns for integer arithmetic."
          },
          "related": [
            "while-loop-syntax",
            "what-are-functions"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-10",
    "num": "10",
    "title": "Functions",
    "page": 10,
    "topics": [
      {
        "id": "what-are-functions",
        "title": "What are Functions?",
        "chapter": "Functions",
        "page": 10,
        "readTime": "3 min",
        "content": {
          "intro": "Functions are reusable blocks of organized code that perform a specific action.",
          "definition": "Functions in Python group reusable code into a block that can be executed by calling the function name. This helps avoid repetition and makes programs modular and readable.",
          "explanation": "Functions in Python group reusable code into a block that can be executed by calling the function name. This helps avoid repetition and makes programs modular and readable. There are many in-build functions in python like print(), input(), len() etc. But you can create your own function and they are called as user defined functions. To make your own function you have to use def keyword and then name the function. After this you have to call the function using name() and parenthesis.",
          "keyPoints": [
            "DRY Principle: Don't Repeat Yourself.",
            "Built-in functions: Provided natively by Python (print, len, type, int).",
            "User-defined functions: Defined using the 'def' keyword followed by function name and ():",
            "Executed by calling function_name()."
          ],
          "codeExamples": [
            {
              "title": "Defining and Calling User-Defined Functions",
              "code": "# Defining a user-defined function using def keyword:\ndef greet_students():\n    print(\"Hello! Welcome to Coding Academy.\")\n    print(\"Mastering Python step by step!\")\n\n# Calling the function:\ngreet_students()\ngreet_students()  # Reusable without rewriting code",
              "output": "Hello! Welcome to Coding Academy.\nMastering Python step by step!\nHello! Welcome to Coding Academy.\nMastering Python step by step!"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Functions can return values to their caller using the 'return' keyword."
          },
          "related": [
            "parameters-and-arguments",
            "types-of-arguments"
          ]
        }
      },
      {
        "id": "parameters-and-arguments",
        "title": "Parameters and Arguments",
        "chapter": "Functions",
        "page": 10,
        "readTime": "3 min",
        "content": {
          "intro": "Parameters and arguments allow data to be passed into functions dynamically.",
          "definition": "Parameters are variables listed inside the function definition parentheses. Arguments are the actual values passed to the function when it is called.",
          "explanation": "First thing I want to talk about is parameters, parameters are variables listed inside the function definition. For making the function we have to accept inside the parenthesis of the function. Arguments are the Values passed to a function when it is called. For example you can say you have created the parameters that are working like variables then we can pass the values to our variables using arguments. As you can see name is the parameter and Alice is the argument that we passed to name. And you can pass N number of parameters and arguments but they must be same like if you have taken 3 parameters you have to provide 3 arguments otherwise there will be error. And another thing is first parameter, will always capture first argument and so on. These arguments are called positional argument.",
          "keyPoints": [
            "Parameter = Variable placeholder in function definition.",
            "Argument = Real value sent during function call.",
            "Positional argument: Arguments mapped to parameters by their sequential order."
          ],
          "codeExamples": [
            {
              "title": "Parameters vs Arguments in Python",
              "code": "# name is the PARAMETER (placeholder variable)\ndef greet_user(name):\n    print(f\"Hello, {name}!\")\n\n# 'Alice' is the ARGUMENT (actual value passed)\ngreet_user(\"Alice\")\ngreet_user(\"Akarsh\")\n\n# Multiple parameters:\ndef add(a, b):\n    return a + b\n\nresult = add(10, 20)  # 10 maps to a, 20 maps to b\nprint(\"10 + 20 =\", result)",
              "output": "Hello, Alice!\nHello, Akarsh!\n10 + 20 = 30"
            }
          ],
          "notes": {
            "type": "warning",
            "text": "If a function expects 2 positional arguments and you pass 1 or 3, Python raises TypeError: missing required positional argument."
          },
          "related": [
            "types-of-arguments",
            "what-are-data-structures"
          ]
        }
      },
      {
        "id": "types-of-arguments",
        "title": "Types of Arguments (Positional, Default, Keyword)",
        "chapter": "Functions",
        "page": 10,
        "readTime": "3 min",
        "content": {
          "intro": "Python offers three versatile mechanisms to provide arguments to functions.",
          "definition": "1. Positional arguments (ordered)\n2. Default arguments (fallback value)\n3. Keyword arguments (explicit name mapping)",
          "explanation": "Now there are 3 types of argument that we can pass to parameters: positional argument, default argument, keyword argument. For understanding these we will first see examples.\nFirst example shows how positional arguments work.\nSecond example shows how default argument works here if you don’t pass any value still the function will run.\nLast example shows how keyword argument works using this you can pass values in any order.",
          "keyPoints": [
            "Positional: Passed in exact order matching parameter definitions.",
            "Default: Has a fallback value if omitted during invocation (param=default).",
            "Keyword: Explicitly specified as key=value; order does not matter."
          ],
          "codeExamples": [
            {
              "title": "The Three Types of Arguments",
              "code": "# 1. Positional Argument:\ndef describe_pet(animal_type, pet_name):\n    print(f\"I have a {animal_type} named {pet_name}.\")\n\ndescribe_pet(\"cat\", \"Whiskers\")  # Positional\n\n# 2. Default Argument (default city is Bhopal):\ndef student_info(name, city=\"Bhopal\"):\n    print(f\"{name} is from {city}.\")\n\nstudent_info(\"Akarsh\")            # Uses default 'Bhopal'\nstudent_info(\"Rahul\", \"Delhi\")   # Overrides default with 'Delhi'\n\n# 3. Keyword Argument (Order does not matter!):\ndescribe_pet(pet_name=\"Buddy\", animal_type=\"dog\")",
              "output": "I have a cat named Whiskers.\nAkarsh is from Bhopal.\nRahul is from Delhi.\nI have a dog named Buddy."
            }
          ],
          "notes": {
            "type": "important",
            "text": "Syntax Rule: In function definitions, non-default parameters must always precede default parameters."
          },
          "related": [
            "parameters-and-arguments",
            "what-are-data-structures"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-11",
    "num": "11",
    "title": "Data Structures",
    "page": 11,
    "topics": [
      {
        "id": "what-are-data-structures",
        "title": "What are Data Structures?",
        "chapter": "Data Structures",
        "page": 11,
        "readTime": "3 min",
        "content": {
          "intro": "Data structures provide programmatic ways of storing, arranging, and accessing data collections efficiently.",
          "definition": "Data structures are used to store, organize, and manipulate data efficiently. Python provides several built-in data structures.",
          "explanation": "Data structures are used to store, organize, and manipulate data efficiently. Python provides several built-in data structures. And for storing multiple values we will again use variables. Now in python we have 4 types of in-build data structure: List, Tuple, Dictionary, Set. Now there are some custom data structures as well like Stack, Queue, Linked List, Graph etc. And around these data structures there are some algorithms like searching algorithms, sorting algorithms. And this is why the study is called data structures and algorithm. Lets be clear this python notes are not for the DSA this will cover all the in-build data structures.",
          "keyPoints": [
            "4 Built-in Data Structures in Python: List, Tuple, Dictionary, Set.",
            "Custom Data Structures: Stack, Queue, Linked List, Tree, Graph.",
            "DSA covers the combination of data structures with sorting and searching algorithms.",
            "These notes focus completely on mastering Python's built-in data structures."
          ],
          "codeExamples": [
            {
              "title": "Overview of Python's 4 Built-in Data Structures",
              "code": "# 1. List: Ordered, Mutable, Allows Duplicates []\nmy_list = [10, \"Python\", 3.14, 10]\n\n# 2. Tuple: Ordered, Immutable, Allows Duplicates ()\nmy_tuple = (10, \"Python\", 3.14, 10)\n\n# 3. Set: Unordered, Mutable, Unique Elements Only {}\nmy_set = {10, 20, 30, 10}\n\n# 4. Dictionary: Key-Value Pairs, Ordered {}\nmy_dict = {\"name\": \"Akarsh\", \"school\": \"Python\"}\n\nprint(\"List:\", my_list)\nprint(\"Tuple:\", my_tuple)\nprint(\"Set:\", my_set)  # Notice duplicate 10 removed\nprint(\"Dict:\", my_dict)",
              "output": "List: [10, 'Python', 3.14, 10]\nTuple: (10, 'Python', 3.14, 10)\nSet: {10, 20, 30}\nDict: {'name': 'Akarsh', 'school': 'Python'}"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Choosing the right data structure directly impacts the time and space complexity of your application."
          },
          "related": [
            "list-basics-and-powers",
            "tuple-basics-and-powers"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-12",
    "num": "12",
    "title": "List",
    "page": 12,
    "topics": [
      {
        "id": "list-basics-and-powers",
        "title": "List Basics & Powers",
        "chapter": "List",
        "page": 12,
        "readTime": "3 min",
        "content": {
          "intro": "Lists are the most versatile and frequently used sequence type in Python.",
          "definition": "A list is an ordered, mutable collection of heterogeneous items enclosed in square brackets [].",
          "explanation": "Before starting we need to understand some of the terminology:\n- Mutable: Mutability refers to whether an object's value can be changed after creation. And List allows this.\n- Duplicates: we know data structures are used to store multiple values so duplicates means same value occuring multiple time. List allows this.\n- Ordered: List maintains ordered data structure maintains the sequence of elements as they were inserted. This means you can access elements using their position (index).\n- Heterogenous: List have heterogenous nature that means we can have multiple data types inside the list.\nFirst we have to know what is the syntax of list and how, to create a list we have to use square brackets ([]).",
          "keyPoints": [
            "Mutable: You can modify, append, or delete elements in-place.",
            "Duplicates: Permits duplicate items freely.",
            "Ordered: Sequence order is preserved.",
            "Heterogeneous: Can hold integers, strings, floats, lists, etc. in a single collection."
          ],
          "codeExamples": [
            {
              "title": "Demonstrating the 4 Powers of List",
              "code": "# 1. Heterogeneous & Duplicates:\nitems = [10, \"Python\", 3.14, True, 10]\nprint(\"Original list:\", items)\n\n# 2. Ordered (Indexed access):\nprint(\"First element:\", items[0])\nprint(\"Second element:\", items[1])\n\n# 3. Mutable (In-place modification):\nitems[0] = 999\nitems.append(\"New Item\")\nprint(\"Modified list:\", items)",
              "output": "Original list: [10, 'Python', 3.14, True, 10]\nFirst element: 10\nSecond element: Python\nModified list: [999, 'Python', 3.14, True, 10, 'New Item']"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Unlike strings, lists allow direct item assignment like items[0] = 999."
          },
          "related": [
            "list-traversing-and-methods",
            "list-questions"
          ]
        }
      },
      {
        "id": "list-traversing-and-methods",
        "title": "List Indexing, Slicing, Traversing & Methods",
        "chapter": "List",
        "page": 12,
        "readTime": "4 min",
        "content": {
          "intro": "List traversal and manipulation methods form daily programming workflows.",
          "definition": "List methods allow in-place insertion, deletion, sorting, and inspection of list elements.",
          "explanation": "Now list has Indexing and slicing and it is same as string if you forgot how string indexing and slicing works watch the video or revise the notes. The changes we saw in string and list is about mutability, we can’t change the values of string. but we can of list.\nNow list traversing is also similar to string traversing it can be looped using the index values and directly. Now list has some methods that are used to do many, and don’t worry if you are not sure what are methods, for now just think they are like function, further we will see it clearly. Now see some of the examples of the methods you will get it what they are used for. So these are some methods that are used in list.",
          "keyPoints": [
            "append(x): Adds x to the end of list.",
            "insert(index, x): Inserts x at specified index.",
            "remove(x): Removes first occurrence of x.",
            "pop(index): Removes and returns item at index (default is last).",
            "sort(): Sorts list in ascending order in-place.",
            "reverse(): Reverses list order in-place."
          ],
          "codeExamples": [
            {
              "title": "Essential List Methods",
              "code": "nums = [40, 10, 30, 20]\n\n# Append & Insert\nnums.append(50)\nnums.insert(2, 25)\nprint(\"After append & insert:\", nums)\n\n# Pop & Remove\npopped = nums.pop()  # removes 50\nnums.remove(25)      # removes 25\nprint(f\"Popped: {popped}, List now: {nums}\")\n\n# Sort & Reverse\nnums.sort()\nprint(\"Sorted:\", nums)\nnums.reverse()\nprint(\"Reversed:\", nums)",
              "output": "After append & insert: [40, 10, 25, 30, 20, 50]\nPopped: 50, List now: [40, 10, 30, 20]\nSorted: [10, 20, 30, 40]\nReversed: [40, 30, 20, 10]"
            }
          ],
          "notes": {
            "type": "important",
            "text": "nums.sort() modifies the list in place and returns None! Use sorted(nums) if you want a new list returned."
          },
          "related": [
            "list-questions",
            "tuple-basics-and-powers"
          ]
        }
      },
      {
        "id": "list-questions",
        "title": "Some Questions on List (Solutions)",
        "chapter": "List",
        "page": 12,
        "readTime": "4 min",
        "content": {
          "intro": "Complete solutions to all 5 List interview practice questions from Page 12.",
          "definition": "Algorithmic operations and statistical reductions on lists.",
          "explanation": "Questions on List:\n1. Print positive and negative elements of a List\n2. Mean of List elements\n3. Find the greatest element and print its index too\n4. Find the second greatest element\n5. Check if List is sorted or not.",
          "keyPoints": [
            "Positive / Negative: Filter by >= 0 and < 0.",
            "Mean: sum(lst) / len(lst).",
            "Greatest & index: max(lst) and lst.index(max(lst)).",
            "Second greatest: Find max, remove or filter duplicates, find max of rest.",
            "Sorted check: all(lst[i] <= lst[i+1] for i in range(len(lst)-1))."
          ],
          "codeExamples": [
            {
              "title": "Solutions to Questions 1, 2, 3",
              "code": "lst = [12, -7, 5, -3, 8, -2, 9, 15]\n\n# 1. Positive and Negative Elements\npos = [x for x in lst if x >= 0]\nneg = [x for x in lst if x < 0]\nprint(\"Positive:\", pos)\nprint(\"Negative:\", neg)\n\n# 2. Mean of List Elements\nmean_val = sum(lst) / len(lst)\nprint(f\"Mean of list: {mean_val:.2f}\")\n\n# 3. Greatest Element and Index\nmax_val = max(lst)\nmax_idx = lst.index(max_val)\nprint(f\"Greatest: {max_val} at index {max_idx}\")",
              "output": "Positive: [12, 5, 8, 9, 15]\nNegative: [-7, -3, -2]\nMean of list: 4.62\nGreatest: 15 at index 7"
            },
            {
              "title": "Solutions to Questions 4 and 5",
              "code": "# 4. Second Greatest Element\nunique_nums = list(set([10, 45, 20, 45, 30]))\nunique_nums.sort()\nsecond_greatest = unique_nums[-2]\nprint(\"Second Greatest:\", second_greatest)  # 30\n\n# 5. Check if List is Sorted\ndef is_sorted(arr):\n    for i in range(len(arr) - 1):\n        if arr[i] > arr[i + 1]:\n            return False\n    return True\n\nprint(\"Is [10, 20, 30] sorted?\", is_sorted([10, 20, 30]))\nprint(\"Is [30, 10, 20] sorted?\", is_sorted([30, 10, 20]))",
              "output": "Second Greatest: 30\nIs [10, 20, 30] sorted? True\nIs [30, 10, 20] sorted? False"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Converting to a set first eliminates duplicates when seeking the true second greatest element."
          },
          "related": [
            "list-basics-and-powers",
            "tuple-basics-and-powers"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-13",
    "num": "13",
    "title": "Tuple",
    "page": 13,
    "topics": [
      {
        "id": "tuple-basics-and-powers",
        "title": "Tuple Powers & Immutability",
        "chapter": "Tuple",
        "page": 13,
        "readTime": "3 min",
        "content": {
          "intro": "Tuples provide immutable ordered sequences, ideal for fixed data records.",
          "definition": "A tuple is an immutable, ordered, heterogeneous sequence of items enclosed in parentheses ().",
          "explanation": "Before starting we need to understand some of the terminology:\n- Immutable: Tuples are not mutable you cannot change the values of tuple.\n- Duplicates: You can have duplicate values in tuple there are no restriction.\n- Ordered: Tuples are ordered and you can access them through index values.\n- Heterogenous: Tuples also have heterogenous nature and can have different types of data structure in tuple.",
          "keyPoints": [
            "Immutable: Cannot add, update, or remove items once created.",
            "Duplicates: Allowed.",
            "Ordered: Elements indexed from 0 upwards.",
            "Heterogeneous: Can contain mixed data types."
          ],
          "codeExamples": [
            {
              "title": "Tuple Immutability in Action",
              "code": "tup = (10, \"Python\", 3.14, 10)\nprint(\"Tuple:\", tup)\nprint(\"Index 1:\", tup[1])\n\n# Attempting mutation raises TypeError:\ntry:\n    tup[0] = 99  # TypeError\nexcept TypeError as e:\n    print(\"Mutation error caught:\", e)",
              "output": "Tuple: (10, 'Python', 3.14, 10)\nIndex 1: Python\nMutation error caught: 'tuple' object does not support item assignment"
            }
          ],
          "notes": {
            "type": "warning",
            "text": "To create a single-element tuple, you MUST include a trailing comma: single_tup = (42,). Without comma, (42) is just an integer."
          },
          "related": [
            "tuple-traversing-and-methods",
            "set-basics-and-powers"
          ]
        }
      },
      {
        "id": "tuple-traversing-and-methods",
        "title": "Tuple Traversing & Methods",
        "chapter": "Tuple",
        "page": 13,
        "readTime": "2 min",
        "content": {
          "intro": "Because tuples are immutable, they expose only two read-only methods.",
          "definition": "Tuples have exactly two built-in methods: index() and count().",
          "explanation": "Tuples are traversed in the same manner as List are traversed. But remember tuples are like strings you can’t change anything once it’s made we can’t change them. Well the use case is not much in question solving but still you have to understand it. Methods of tuple are:\nYes there are only 2 methods of tuple one for finding the index and other of counting the occurrences of an element.",
          "keyPoints": [
            "index(x): Returns the first index of value x.",
            "count(x): Returns the total occurrences of value x in the tuple."
          ],
          "codeExamples": [
            {
              "title": "The Only 2 Methods of Tuple: index() and count()",
              "code": "fruits = (\"apple\", \"banana\", \"cherry\", \"apple\", \"apple\")\n\n# 1. count() method\napple_count = fruits.count(\"apple\")\nprint(f\"'apple' appears: {apple_count} times\")\n\n# 2. index() method\nbanana_idx = fruits.index(\"banana\")\nprint(f\"'banana' is at index: {banana_idx}\")\n\n# Traversing a tuple:\nprint(\"Traversing tuple:\")\nfor f in fruits[:3]:\n    print(f, end=\" | \")\nprint()",
              "output": "'apple' appears: 3 times\n'banana' is at index: 1\nTraversing tuple:\napple | banana | cherry | "
            }
          ],
          "notes": {
            "type": "info",
            "text": "Tuples use less memory than lists and can be used as dictionary keys because they are hashable."
          },
          "related": [
            "tuple-basics-and-powers",
            "set-basics-and-powers"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-14",
    "num": "14",
    "title": "Set",
    "page": 14,
    "topics": [
      {
        "id": "set-basics-and-powers",
        "title": "Set Powers & Hashing",
        "chapter": "Set",
        "page": 14,
        "readTime": "3 min",
        "content": {
          "intro": "Sets are unordered collections of unique, hashable elements based on mathematical set theory.",
          "definition": "A set is an unordered, mutable collection of unique, immutable elements enclosed in curly braces {}.",
          "explanation": "Before starting we need to understand some of the terminology:\n- Mutable: Sets are mutable you can change the values of set.\n- Duplicates: You cannot have any duplicate values in set that means every element will be unique.\n- Unordered: Sets are unordered and you cannot access them through index values.\n- Heterogenous: Set is semi-heterogenous it can store some data types like string, numbers, tuples but not everything.\nHow Set stores value in python:\nEach value in a set is hashed using a hash function (hash() in Python). The hash is used as an index to store the element in memory. Since hashing does not maintain order, sets are unordered. Only immutable (hashable) objects can be stored in a set (e.g., numbers, strings, tuples). Mutable objects like lists and dictionaries are not allowed. See the video for more clear understanding.",
          "keyPoints": [
            "Mutable: Can add and remove items.",
            "No duplicates: Duplicate values automatically collapsed into one.",
            "Unordered: No guaranteed ordering; no indexing (s[0] is invalid).",
            "Semi-heterogeneous: Only hashable (immutable) items allowed."
          ],
          "codeExamples": [
            {
              "title": "Set Deduplication and Hash Function",
              "code": "# Sets automatically eliminate duplicates:\nmy_set = {1, 2, 3, 2, 1, 4}\nprint(\"Set after deduplication:\", my_set)\n\n# Hashing demonstration with hash():\nprint(\"hash('apple'):\", hash('apple'))\nprint(\"hash(42):\", hash(42))\n\n# Trying to put a mutable list in a set raises TypeError:\ntry:\n    invalid_set = {1, [2, 3]}  # Unhashable type: 'list'\nexcept TypeError as e:\n    print(\"TypeError caught:\", e)",
              "output": "Set after deduplication: {1, 2, 3, 4}\nhash('apple'): <integer hash value>\nhash(42): 42\nTypeError caught: unhashable type: 'list'"
            }
          ],
          "notes": {
            "type": "important",
            "text": "To create an empty set, you MUST use set(), because {} creates an empty dictionary!"
          },
          "related": [
            "set-methods-and-operations",
            "dictionary-basics-and-powers"
          ]
        }
      },
      {
        "id": "set-methods-and-operations",
        "title": "Set Methods & Set Operations (Union, Intersection)",
        "chapter": "Set",
        "page": 14,
        "readTime": "3 min",
        "content": {
          "intro": "Sets provide mathematical operations: Union, Intersection, Difference, and Symmetric Difference.",
          "definition": "Mathematical operations between two sets to find commonalities and differences.",
          "explanation": "A set cannot be traversed using the index values cause it is unordered and has no index. So many times it will give random values. Now set methods are very powerful cause you don’t have any indexing you cannot change the values but set is mutable so we use methods for this. For adding and removing the elements you can use methods as follows. Now these are some of the basic methods but sets also have some special methods for performing some special operations between 2 sets:\n- Union (|)\n- Intersection (&)\n- Difference (-)\n- Symmetric Difference (^)\nSo these are some other operations of sets that can be performed between 2 sets. And we also have shortcuts for them. Ok so we have seen these operations and while watching the video you have seen a venn diagram approach as well there are more methods you are open to try them and see the working. But at the end set is not used that much in python lets continue.",
          "keyPoints": [
            "Union (A | B): All elements from both sets.",
            "Intersection (A & B): Only elements present in both sets.",
            "Difference (A - B): Elements in A that are not in B.",
            "Symmetric Difference (A ^ B): Elements in either A or B, but not both."
          ],
          "codeExamples": [
            {
              "title": "Set Methods and Mathematical Operations",
              "code": "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\n# Methods to add and remove:\na.add(10)\na.discard(10)  # removes without error if missing\n\n# Venn diagram set operations:\nprint(\"Union (a | b):\", a | b)\nprint(\"Intersection (a & b):\", a & b)\nprint(\"Difference (a - b):\", a - b)\nprint(\"Symmetric Diff (a ^ b):\", a ^ b)",
              "output": "Union (a | b): {1, 2, 3, 4, 5, 6}\nIntersection (a & b): {3, 4}\nDifference (a - b): {1, 2}\nSymmetric Diff (a ^ b): {1, 2, 5, 6}"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Membership testing with 'in' (e.g., 'x in my_set') is O(1) average time complexity in sets, compared to O(n) in lists!"
          },
          "related": [
            "set-basics-and-powers",
            "dictionary-basics-and-powers"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-15",
    "num": "15",
    "title": "Dictionary",
    "page": 15,
    "topics": [
      {
        "id": "dictionary-basics-and-powers",
        "title": "Dictionary Powers, Syntax & Working",
        "chapter": "Dictionary",
        "page": 15,
        "readTime": "3 min",
        "content": {
          "intro": "Dictionaries store data in associative key-value pairs with fast lookup times.",
          "definition": "A dictionary is a mutable, ordered collection of key-value pairs where keys must be unique and immutable.",
          "explanation": "Before starting we need to understand some of the terminology:\n- Mutable: Dictionaries are mutable, meaning you can change, add, or remove key-value pairs after creation.\n- Duplicates: Keys must be unique, but you can have duplicates in values.\n- Order: Dictionary follows insertion order.\n- Heterogeneous: A dictionary can store different types of keys and values, like integers, strings, lists, or even another dictionary.\nNow we know we have to use key and value pairs to store values in dictionary. And the keys in dictionary acts like index values that we use in List. Again telling we can perform CRUD(create, read, update, delete) operations on values but not all on keys cause the keys cannot be changed after creation.",
          "keyPoints": [
            "Key-Value mapping: key: value.",
            "Keys must be unique and immutable (hashable).",
            "Values can be duplicated and of any arbitrary data type.",
            "Since Python 3.7, dictionaries preserve insertion order."
          ],
          "codeExamples": [
            {
              "title": "Dictionary Creation and CRUD Operations",
              "code": "# CREATE\nstudent = {\"name\": \"Akarsh\", \"age\": 22, \"city\": \"Bhopal\"}\n\n# READ\nprint(\"Name:\", student[\"name\"])\nprint(\"Safe read with get():\", student.get(\"course\", \"Not Enrolled\"))\n\n# UPDATE\nstudent[\"age\"] = 23\nstudent[\"school\"] = \"Python\"  # Adds new key\nprint(\"After Update:\", student)\n\n# DELETE\ndel student[\"city\"]\npopped_val = student.pop(\"age\")\nprint(f\"Popped age: {popped_val}, Dict now: {student}\")",
              "output": "Name: Akarsh\nSafe read with get(): Not Enrolled\nAfter Update: {'name': 'Akarsh', 'age': 23, 'city': 'Bhopal', 'school': 'Python'}\nPopped age: 23, Dict now: {'name': 'Akarsh', 'school': 'Python'}"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Accessing a missing key with dict[key] raises KeyError. Use dict.get(key, default) to safely handle missing keys."
          },
          "related": [
            "dictionary-traversing-and-methods",
            "dictionary-questions"
          ]
        }
      },
      {
        "id": "dictionary-traversing-and-methods",
        "title": "Dictionary Traversing & Methods",
        "chapter": "Dictionary",
        "page": 15,
        "readTime": "3 min",
        "content": {
          "intro": "Traversing keys, values, and item pairs using Python's dictionary iteration methods.",
          "definition": "Methods to access keys(), values(), and items() in dictionaries.",
          "explanation": "We can traverse both keys and values in dictionary, but default loop is set on keys and you can access the values because of keys. So technically you can traverse on both keys and values at the same time? Do see the video explanation for better understanding. There are not many dictionary methods lets see the working of some? as you all know we can use help(dict) for getting the information of all the methods available.",
          "keyPoints": [
            "for k in d: Iterates through keys by default.",
            "for v in d.values(): Iterates through values.",
            "for k, v in d.items(): Iterates through key-value pairs simultaneously."
          ],
          "codeExamples": [
            {
              "title": "Iterating Over Dictionaries",
              "code": "scores = {\"math\": 95, \"physics\": 88, \"python\": 100}\n\n# Traversing keys and values together with .items():\nfor subject, score in scores.items():\n    print(f\"Subject: {subject:<8} | Score: {score}\")\n\n# Dictionary methods:\nprint(\"Keys:\", list(scores.keys()))\nprint(\"Values:\", list(scores.values()))",
              "output": "Subject: math     | Score: 95\nSubject: physics  | Score: 88\nSubject: python   | Score: 100\nKeys: ['math', 'physics', 'python']\nValues: [95, 88, 100]"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Use help(dict) in interactive Python shell to see full documentation for all dictionary methods."
          },
          "related": [
            "dictionary-questions",
            "dictionary-basics-and-powers"
          ]
        }
      },
      {
        "id": "dictionary-questions",
        "title": "Dictionary Questions (Merge, Sum, Frequency, Combine)",
        "chapter": "Dictionary",
        "page": 15,
        "readTime": "4 min",
        "content": {
          "intro": "Complete solutions to the 4 practice questions from Page 15 of the Programming notes.",
          "definition": "Data aggregation and manipulation using dictionaries.",
          "explanation": "Dictionary Questions from the book:\n1. Write a Python script to merge two Python dictionaries\n2. Write a Python program to sum all the values in a dictionary\n3. Count the frequency of each element\n4. Write a Python program to combine two dictionary by adding values for common keys.",
          "keyPoints": [
            "Q1: Merge with dict1 | dict2 or {**dict1, **dict2}.",
            "Q2: sum(d.values()).",
            "Q3: Count frequencies with loop or dict.get(x, 0) + 1.",
            "Q4: Combine values of matching keys."
          ],
          "codeExamples": [
            {
              "title": "Solutions to Questions 1, 2, 3, and 4",
              "code": "# Q1: Merge two dictionaries (using | operator in Python 3.9+)\nd1 = {'a': 100, 'b': 200}\nd2 = {'c': 300, 'd': 400}\nmerged = d1 | d2\nprint(\"Q1 Merged:\", merged)\n\n# Q2: Sum all values in dictionary\nsalaries = {'A': 5000, 'B': 7000, 'C': 3000}\nprint(\"Q2 Sum of values:\", sum(salaries.values()))\n\n# Q3: Count frequency of each element\nletters = ['a', 'b', 'a', 'c', 'b', 'a', 'd']\nfreq = {}\nfor ch in letters:\n    freq[ch] = freq.get(ch, 0) + 1\nprint(\"Q3 Frequencies:\", freq)\n\n# Q4: Combine two dicts by adding values for common keys\nd_x = {'a': 10, 'b': 20, 'c': 30}\nd_y = {'b': 15, 'c': 25, 'd': 40}\ncombined = d_x.copy()\nfor k, v in d_y.items():\n    combined[k] = combined.get(k, 0) + v\nprint(\"Q4 Combined:\", combined)",
              "output": "Q1 Merged: {'a': 100, 'b': 200, 'c': 300, 'd': 400}\nQ2 Sum of values: 15000\nQ3 Frequencies: {'a': 3, 'b': 2, 'c': 1, 'd': 1}\nQ4 Combined: {'a': 10, 'b': 35, 'c': 55, 'd': 40}"
            }
          ],
          "notes": {
            "type": "info",
            "text": "The frequency counting pattern (freq[item] = freq.get(item, 0) + 1) is a standard interview idiom."
          },
          "related": [
            "dictionary-basics-and-powers",
            "errors-and-exceptions"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-16",
    "num": "16",
    "title": "Exception Handling",
    "page": 16,
    "topics": [
      {
        "id": "errors-and-exceptions",
        "title": "Errors vs Exceptions",
        "chapter": "Exception Handling",
        "page": 16,
        "readTime": "3 min",
        "content": {
          "intro": "Understanding the difference between fatal parsing errors and catchable runtime exceptions.",
          "definition": "Errors are fundamental syntax or indentation mistakes that prevent code from parsing. Exceptions are runtime disruptions that occur while code is executing.",
          "explanation": "Errors occur due to mistakes in the code that prevent it from running. These can be syntax errors or logical errors. Now this above code will give the error of syntax. You already know what is indentation and if you don’t follow it you will get the error. There is one more tab error when you mix tabs and spaces. These errors cannot be handled. but what can be handled are exceptions.\nExceptions are unexpected events or errors that occurs during the execution of a program, which disrupts the normal flow of the program. Now this is a ZeroDivisionError and can be counted as Exception and because of this exception the next line cannot be executed. Like this there are many other exceptions just leave the three errors we saw at start otherwise others are exceptions. And the good part is we can handle them lets see how.",
          "keyPoints": [
            "Fatal Unhandled Errors: SyntaxError, IndentationError, TabError (detected during compile/parse time).",
            "Catchable Exceptions: ZeroDivisionError, ValueError, TypeError, KeyError, FileNotFoundError (occur at runtime).",
            "Handling exceptions prevents your program from abruptly crashing."
          ],
          "codeExamples": [
            {
              "title": "Uncaught Exception Causing Program Crash",
              "code": "# ZeroDivisionError example from the book:\na = 10\nb = 0\n\n# Unhandled exception halts program immediately:\n# print(a / b)  # ZeroDivisionError: division by zero\n\nprint(\"Code without error handling would never reach this point!\")",
              "output": "Code without error handling would never reach this point!"
            }
          ],
          "notes": {
            "type": "warning",
            "text": "SyntaxError cannot be caught with try-except because Python fails before executing any instructions."
          },
          "related": [
            "try-except-else-finally",
            "what-are-files"
          ]
        }
      },
      {
        "id": "try-except-else-finally",
        "title": "Exception Handling Keywords (try, except, else, finally, raise)",
        "chapter": "Exception Handling",
        "page": 16,
        "readTime": "4 min",
        "content": {
          "intro": "Python provides 5 dedicated keywords to gracefully handle and recover from runtime exceptions.",
          "definition": "The structured exception handling mechanism: try, except, else, finally, raise.",
          "explanation": "Keyword Purpose Table from the book:\n- try: Wrap the block of code that might cause an exception.\n- except: Handle the exception if it occurs\n- else: Run code only if no exception occurs\n- finally: Run code no matter what, whether there’s an exception or not\n- raise: Manually throw an exception\nSo these are the keywords that we use and all these keywords has their separate purpose as mentioned. To see the code part see the video.",
          "keyPoints": [
            "try: Critical section containing risky code.",
            "except ExceptionType as err: Executes if the named exception is raised.",
            "else: Executes if try block succeeds with zero exceptions.",
            "finally: Cleanup code that ALWAYS runs (even if return statement was executed).",
            "raise: Allows programmers to manually trigger exceptions based on custom logic."
          ],
          "codeExamples": [
            {
              "title": "Complete try-except-else-finally-raise Pipeline",
              "code": "def divide_numbers(a, b):\n    try:\n        if b < 0:\n            raise ValueError(\"Negative divisors are not allowed in this program!\")\n        result = a / b\n    except ZeroDivisionError as e:\n        print(f\"[EXCEPT] Cannot divide by zero: {e}\")\n    except ValueError as e:\n        print(f\"[EXCEPT] Custom validation error: {e}\")\n    else:\n        print(f\"[ELSE] Success! {a} / {b} = {result}\")\n    finally:\n        print(\"[FINALLY] This block always runs regardless of outcome!\\n\")\n\n# 1. Normal run\ndivide_numbers(20, 4)\n\n# 2. Zero division\ndivide_numbers(20, 0)\n\n# 3. Manually raised exception\ndivide_numbers(20, -2)",
              "output": "[ELSE] Success! 20 / 4 = 5.0\n[FINALLY] This block always runs regardless of outcome!\n\n[EXCEPT] Cannot divide by zero: division by zero\n[FINALLY] This block always runs regardless of outcome!\n\n[EXCEPT] Custom validation error: Negative divisors are not allowed in this program!\n[FINALLY] This block always runs regardless of outcome!"
            }
          ],
          "notes": {
            "type": "important",
            "text": "The finally block is commonly used for closing files, network connections, or database handles."
          },
          "related": [
            "errors-and-exceptions",
            "what-are-files"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-17",
    "num": "17",
    "title": "File Handling",
    "page": 17,
    "topics": [
      {
        "id": "what-are-files",
        "title": "What are Files & File Modes ('r', 'w', 'a', 'x')",
        "chapter": "File Handling",
        "page": 17,
        "readTime": "3 min",
        "content": {
          "intro": "File handling allows programs to persist data across sessions to disk files.",
          "definition": "File handling means Creating, Reading, Updating, Deleting (CRUD) operations that we can perform on files stored on disk.",
          "explanation": "You all know what are files any name with an extension is file. Now that extension can be .py , .txt , .mp3 etc. and when we want to handle these files we will use file handling. File handling means Creating, Reading, Updating, Deleting(CRUD) operations that we can perform in files. Now lets see how to perform these operations in python. We have to use open() function to open a file in python.\nMode Description:\n'r' : Read (default) – file must exist.\n'w' : Write – creates file or overwrites.\n'a' : Append – adds to end of file.\n'x' : Create – creates a new file, fails if it exists.",
          "keyPoints": [
            "'r': Read mode (fails if file does not exist).",
            "'w': Write mode (overwrites file if it already exists or creates a new one).",
            "'a': Append mode (appends new text to the end without truncating existing content).",
            "'x': Exclusive creation mode (fails if file already exists)."
          ],
          "codeExamples": [
            {
              "title": "File Modes in Action",
              "code": "# 1. Writing to a file ('w')\nwith open(\"demo.txt\", \"w\") as f:\n    f.write(\"Line 1: Hello from Coding Academy!\\n\")\n\n# 2. Appending to a file ('a')\nwith open(\"demo.txt\", \"a\") as f:\n    f.write(\"Line 2: Appended new notes for students.\\n\")\n\n# 3. Reading from the file ('r')\nwith open(\"demo.txt\", \"r\") as f:\n    content = f.read()\n    print(\"File content:\\n\" + content)",
              "output": "File content:\nLine 1: Hello from Coding Academy!\nLine 2: Appended new notes for students."
            }
          ],
          "notes": {
            "type": "info",
            "text": "Add 'b' to modes for binary files (e.g. 'rb', 'wb' for images, audio, or PDFs)."
          },
          "related": [
            "file-syntax-and-with",
            "what-is-oops"
          ]
        }
      },
      {
        "id": "file-syntax-and-with",
        "title": "Syntax & with Keyword Project",
        "chapter": "File Handling",
        "page": 17,
        "readTime": "3 min",
        "content": {
          "intro": "The 'with' statement is Python's context manager that automatically closes files when finished.",
          "definition": "The 'with' statement guarantees proper resource management by automatically invoking f.close() even if an exception occurs.",
          "explanation": "This is the basic syntax through which we can open a text file and the ‘r’ there represents read mode and there are multiple modes like this as mentioned before. see the video for other modes as well. Now after working you have to close the file manually but for this we have with keyword. Now Lets create a basic file handling project.",
          "keyPoints": [
            "Traditional open requires manual close: f = open(...); ...; f.close().",
            "Using with open(...) as f: guarantees file descriptor release.",
            "Mini-project: Simple log reader and counter."
          ],
          "codeExamples": [
            {
              "title": "Mini File Handling Project: Note Manager",
              "code": "# Mini File Project as taught in Python:\ndef add_student_note(student_name, note):\n    with open(\"notes.txt\", \"a\") as f:\n        f.write(f\"{student_name}: {note}\\n\")\n\ndef read_student_notes():\n    try:\n        with open(\"notes.txt\", \"r\") as f:\n            return f.readlines()\n    except FileNotFoundError:\n        return [\"No notes file found!\"]\n\n# Add notes and read\nadd_student_note(\"Akarsh\", \"Completed Chapter 17 File Handling.\")\nadd_student_note(\"Alex\", \"Ready for OOPS in Python.\")\n\nnotes = read_student_notes()\nfor n in notes:\n    print(\"Note:\", n.strip())",
              "output": "Note: Akarsh: Completed Chapter 17 File Handling.\nNote: Alex: Ready for OOPS in Python."
            }
          ],
          "notes": {
            "type": "important",
            "text": "Always use 'with open(...) as f:' in production Python code to prevent file handle leaks."
          },
          "related": [
            "what-are-files",
            "what-is-oops"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-18",
    "num": "18",
    "title": "OOPS in Python",
    "page": 18,
    "topics": [
      {
        "id": "what-is-oops",
        "title": "What is OOPS? (Imperative vs Functional vs OOPS)",
        "chapter": "OOPS in Python",
        "page": 18,
        "readTime": "3 min",
        "content": {
          "intro": "Understanding programming paradigms: moving from raw variables to functions to Object-Oriented Programming.",
          "definition": "OOPS (Object-Oriented Programming System) is a programming paradigm based on the concept of 'objects', which can contain data (attributes) and code (methods).",
          "explanation": "For understanding oops first lets see what we were doing in python for creating a program of addition we first use imperative approach. This approach is simple just use 2 variables and add them one problem with this is you have to make 2 other variables for adding 2 other numbers. Next approach is using functions to add 2 numbers this is functional approach. Here the good thing is we can add multiple numbers without using multiple variables. And our next approach is object oriented programming approach. OOPS (Object-Oriented Programming System) is a programming paradigm based on the concept of \"objects\", which can contain data (attributes) and code (methods). I know it is tough to understand right now but it will be easy after learning there are many concepts that we have to learn like classes, objects , Encapsulation, inheritance, Polymorphism, etc. So lets start.",
          "keyPoints": [
            "1. Imperative Approach: Direct variables and operations. Repetitive for multiple entities.",
            "2. Functional Approach: Reusable functions that accept parameters.",
            "3. Object-Oriented Approach: Bundles entity state (data/attributes) and behavior (functions/methods) together into a cohesive object.",
            "Core OOP Pillars: Classes, Objects, Encapsulation, Inheritance, Polymorphism, Abstraction."
          ],
          "codeExamples": [
            {
              "title": "Comparison of the Three Paradigms",
              "code": "# 1. Imperative Approach (Variables):\na1, b1 = 5, 10\nsum1 = a1 + b1\na2, b2 = 20, 30\nsum2 = a2 + b2\nprint(\"Imperative sums:\", sum1, sum2)\n\n# 2. Functional Approach:\ndef add_nums(x, y):\n    return x + y\nprint(\"Functional sum:\", add_nums(50, 60))\n\n# 3. Object-Oriented Approach (Calculator Object):\nclass Calculator:\n    def __init__(self, brand):\n        self.brand = brand\n    def add(self, x, y):\n        return x + y\n\ncalc = Calculator(\"Python Calc\")\nprint(f\"{calc.brand} result:\", calc.add(100, 200))",
              "output": "Imperative sums: 15 50\nFunctional sum: 110\nPython Calc result: 300"
            }
          ],
          "notes": {
            "type": "info",
            "text": "OOP models real-world systems intuitively by mirroring real entities and their relationships."
          },
          "related": [
            "classes-in-oops",
            "objects-in-oops"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-19",
    "num": "19",
    "title": "Classes in OOPS",
    "page": 19,
    "topics": [
      {
        "id": "classes-in-oops",
        "title": "Classes & The House Blueprint Analogy",
        "chapter": "Classes in OOPS",
        "page": 19,
        "readTime": "3 min",
        "content": {
          "intro": "A class acts as the architectural blueprint from which individual real objects are constructed.",
          "definition": "A class is like a blueprint or template for creating objects. Think of a class like the blueprint of a house. It defines what the house should have (rooms, windows, etc.) but doesn’t build the house. An object is the actual house built using that blueprint.",
          "explanation": "A class is like a blueprint or template for creating objects. Think of a class like the blueprint of a house. It defines what the house should have (rooms, windows, etc.) but doesn’t build the house. An object is the actual house built using that blueprint. A class is also created with a basic keyword class and a name in front of it. Creating a class is super simple now lets see what is inside class. There are 2 types of things inside class Attributes and Methods:\n- Attributes: Variables defined inside the class are Attribute\n- Methods: Functions defined inside a class are Methods.\nAccessing attributes and methods:\nA class is initialised only one time when we first run the program. and for accessing the attributes and methods we have to first access the class and then attributes and methods.",
          "keyPoints": [
            "Blueprint analogy: Blueprint = Class; Actual physical house = Object.",
            "class ClassName: Keyword used to declare a class.",
            "Attributes = Variables inside a class.",
            "Methods = Functions defined inside a class."
          ],
          "codeExamples": [
            {
              "title": "House Blueprint Class Example",
              "code": "class HouseBlueprint:\n    # Attributes\n    windows = 4\n    doors = 2\n    rooms = 3\n\n    # Method\n    def show_specs(self):\n        print(f\"House specs: {self.rooms} rooms, {self.doors} doors, {self.windows} windows.\")\n\n# Accessing specs via an instance\nmy_house = HouseBlueprint()\nmy_house.show_specs()",
              "output": "House specs: 3 rooms, 2 doors, 4 windows."
            }
          ],
          "notes": {
            "type": "info",
            "text": "By convention (PEP 8), class names use PascalCase (e.g. HouseBlueprint, UserAccount)."
          },
          "related": [
            "objects-in-oops",
            "what-is-constructor"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-20",
    "num": "20",
    "title": "Objects in OOPS",
    "page": 20,
    "topics": [
      {
        "id": "objects-in-oops",
        "title": "Objects & The Bag Factory Analogy",
        "chapter": "Objects in OOPS",
        "page": 20,
        "readTime": "3 min",
        "content": {
          "intro": "Coding Academy uses the famous Bag Factory analogy (Reebok & Campus) to demystify objects.",
          "definition": "An object is an instance of a class that contains concrete state and can execute the methods defined in its class.",
          "explanation": "For understanding objects first look at this example you have a bag factory and that factory requires material of the bag, number of zips you need in that bag and number of pockets you need in your bag. So this is a kind of a blueprint and using this blueprint Reebok, campus and some other companies provided their requirements and created their bags. Thus these companies became objects who created their bags using the blueprint.\nObject syntax:\nIt is very easy to create an object you just have to call the class inside a variable and that variable becomes an object. The object has all the powers of a class therefore a class object can access attributes and methods of a class.",
          "keyPoints": [
            "Bag factory blueprint: Material, zips, pockets.",
            "Reebok and Campus become concrete objects created using that blueprint.",
            "Instantiating an object: object_variable = ClassName().",
            "An object has full access to the attributes and methods of the class."
          ],
          "codeExamples": [
            {
              "title": "The Bag Factory and Brand Objects in Code",
              "code": "class BagFactory:\n    def set_requirements(self, brand, material, zips, pockets):\n        self.brand = brand\n        self.material = material\n        self.zips = zips\n        self.pockets = pockets\n\n    def display_bag(self):\n        print(f\"[{self.brand} Bag] Material: {self.material} | Zips: {self.zips} | Pockets: {self.pockets}\")\n\n# Creating the Reebok object:\nreebok = BagFactory()\nreebok.set_requirements(\"Reebok\", \"Polyester\", 3, 2)\n\n# Creating the Campus object:\ncampus = BagFactory()\ncampus.set_requirements(\"Campus\", \"Leather\", 4, 3)\n\n# Calling object methods\nreebok.display_bag()\ncampus.display_bag()",
              "output": "[Reebok Bag] Material: Polyester | Zips: 3 | Pockets: 2\n[Campus Bag] Material: Leather | Zips: 4 | Pockets: 3"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Each object maintains its own unique independent memory space for its attributes."
          },
          "related": [
            "classes-in-oops",
            "what-is-constructor"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-21",
    "num": "21",
    "title": "Constructor",
    "page": 21,
    "topics": [
      {
        "id": "what-is-constructor",
        "title": "What is Constructor & self Keyword",
        "chapter": "Constructor",
        "page": 21,
        "readTime": "3 min",
        "content": {
          "intro": "The constructor __init__ automatically initializes an object's state at the moment it is born.",
          "definition": "A constructor is a method that runs automatically when we call a class and this constructor function will target the objects location using the self keyword.",
          "explanation": "You saw last example where we wanted material, zips and pockets from the user to create an object. If we talk about a function we can ask the user using parameters, but in class we can’t have parameters for that we use constructor. A constructor is a method that runs automatically when we call a class and this constructor function will target the objects location. To target the objects location we use self keyword. For clear understanding watch the video carefully. we will create the bag factory and will create multiple objects where self will target the specific locations of the objects.",
          "keyPoints": [
            "__init__(self, ...): The dunder constructor method.",
            "Executes automatically as soon as Object = ClassName(...) is invoked.",
            "self parameter: Holds the reference to the current instance being manipulated.",
            "Allows passing arguments directly into the class call."
          ],
          "codeExamples": [
            {
              "title": "Bag Factory with __init__ Constructor and self",
              "code": "class Bag:\n    # Constructor method runs automatically\n    def __init__(self, brand, material, zips, pockets):\n        # 'self' targets the specific instance's memory location\n        self.brand = brand\n        self.material = material\n        self.zips = zips\n        self.pockets = pockets\n        print(f\"-> Constructor: Built {self.brand} bag at memory {id(self)}\")\n\n    def details(self):\n        return f\"{self.brand}: {self.material}, {self.zips} zips, {self.pockets} pockets\"\n\n# Creating objects with constructor arguments directly:\nbag1 = Bag(\"Reebok\", \"Nylon\", 3, 2)\nbag2 = Bag(\"Campus\", \"Canvas\", 4, 3)\n\nprint(bag1.details())\nprint(bag2.details())",
              "output": "-> Constructor: Built Reebok bag at memory <memory_id_1>\n-> Constructor: Built Campus bag at memory <memory_id_2>\nReebok: Nylon, 3 zips, 2 pockets\nCampus: Canvas, 4 zips, 3 pockets"
            }
          ],
          "notes": {
            "type": "important",
            "text": "You do not pass an argument for 'self' when calling Bag(...); Python passes the instance reference implicitly."
          },
          "related": [
            "attributes-and-methods-types",
            "inheritance-concept"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-22",
    "num": "22",
    "title": "Attributes and Methods",
    "page": 22,
    "topics": [
      {
        "id": "attributes-and-methods-types",
        "title": "Class & Instance Attributes, Instance, Class & Static Methods",
        "chapter": "Attributes and Methods",
        "page": 22,
        "readTime": "4 min",
        "content": {
          "intro": "Differentiating between class-level and instance-level state and the 3 types of methods in Python.",
          "definition": "Attributes: Class (shared) vs Instance (individual). Methods: Instance (operates on self), Class (operates on cls), Static (independent utility).",
          "explanation": "Types of Attribute:\n- Class attribute: A normal variable created inside a class is a class attribute and thats it.\n- Instance attribute: An attribute created using an instance like self.name, self.age etc. It is known as instance attribute.\nTypes of Methods:\n- Instance Method: An instance method works with instance (object) of the class. This method can access and modify instance attributes.\n- Class Method: This method works with the class itself it will not target the instance (object). we have to use @classmethod decorator for creating the class method and it takes cls as their first parameter.\n- Static Method: This method doesn’t access class or instance directly it also uses a decorator @staticmethod it just acts like a regular function placed inside a class.",
          "keyPoints": [
            "Class attribute: Shared by all instances of that class.",
            "Instance attribute: Unique to each instance via self.attribute.",
            "Instance method: Takes 'self' as first parameter.",
            "@classmethod: Takes 'cls' as first parameter, operates on class-level data.",
            "@staticmethod: Takes neither self nor cls; behaves like a plain function inside class namespace."
          ],
          "codeExamples": [
            {
              "title": "The Complete Trio: Instance, Class, and Static Methods",
              "code": "class Student:\n    school_name = \"Coding Academy\"  # Class Attribute (shared)\n\n    def __init__(self, name, age):\n        self.name = name                      # Instance Attribute (unique)\n        self.age = age\n\n    # 1. Instance Method (targets self)\n    def get_details(self):\n        return f\"{self.name}, {self.age} years old ({self.school_name})\"\n\n    # 2. Class Method (targets cls)\n    @classmethod\n    def change_school(cls, new_name):\n        cls.school_name = new_name\n        print(f\"Class method updated school to: {cls.school_name}\")\n\n    # 3. Static Method (independent utility function)\n    @staticmethod\n    def is_adult(age):\n        return age >= 18\n\ns1 = Student(\"Akarsh\", 22)\nprint(s1.get_details())\nprint(\"Is 22 adult?\", Student.is_adult(22))\n\n# Updating via classmethod:\nStudent.change_school(\"Python AI Institute\")\nprint(s1.get_details())",
              "output": "Akarsh, 22 years old (Coding Academy)\nIs 22 adult? True\nClass method updated school to: Python AI Institute\nAkarsh, 22 years old (Python AI Institute)"
            }
          ],
          "notes": {
            "type": "info",
            "text": "@classmethod is commonly used for alternative constructors (factory methods like Student.from_string('Akarsh,22'))."
          },
          "related": [
            "what-is-constructor",
            "inheritance-concept"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-23",
    "num": "23",
    "title": "Inheritance",
    "page": 23,
    "topics": [
      {
        "id": "inheritance-concept",
        "title": "Inheritance, Syntax & Benefits",
        "chapter": "Inheritance",
        "page": 23,
        "readTime": "3 min",
        "content": {
          "intro": "Inheritance allows a new child class to reuse, extend, and specialize the behaviors of an existing parent class.",
          "definition": "Inheritance allows a class (child class) to inherit properties and behaviors (attributes and methods) from another class (parent class).",
          "explanation": "In general terms Inheritance means property or any possession that comes to an heir. But our python neither have an old man or a child then inheritance works where ? It works between classes. Inheritance allows a class (child class) to inherit properties and behaviors (attributes and methods) from another class (parent class). Benefits of using inheritance is:\n- Code reusability\n- Organized structure\n- Easy to maintain and extend\nSyntax is very simple just like you take parameters in functions here you will take parameters but those parameters will be classes. Now the inherited class has all the powers of parent class that means all the methods, attributes can be accessed by the instance of child class as well.",
          "keyPoints": [
            "Real-world heir analogy: Parent passes property down to heir.",
            "Syntax: class ChildClass(ParentClass):",
            "Child class acquires all accessible methods and attributes of ParentClass automatically."
          ],
          "codeExamples": [
            {
              "title": "Basic Inheritance Syntax",
              "code": "# Parent Class\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n    def breathe(self):\n        return f\"{self.name} is breathing oxygen.\"\n\n# Child Class inheriting from Animal\nclass Dog(Animal):\n    def bark(self):\n        return f\"{self.name} says: Woof! Woof!\"\n\n# Instantiate child object\nmy_dog = Dog(\"Buddy\")\nprint(my_dog.breathe())  # Inherited from Animal\nprint(my_dog.bark())     # Specific to Dog",
              "output": "Buddy is breathing oxygen.\nBuddy says: Woof! Woof!"
            }
          ],
          "notes": {
            "type": "info",
            "text": "In Python, every user class implicitly inherits from the root 'object' class."
          },
          "related": [
            "super-and-types-of-inheritance",
            "polymorphism-concept"
          ]
        }
      },
      {
        "id": "super-and-types-of-inheritance",
        "title": "super() & Types of Inheritance (Single, Multiple, Multilevel)",
        "chapter": "Inheritance",
        "page": 23,
        "readTime": "4 min",
        "content": {
          "intro": "Connecting constructors with super() and exploring the three primary forms of inheritance.",
          "definition": "super() delegates constructor calls to the parent class. Single (1 parent), Multiple (2+ parents with MRO), Multilevel (grandparent -> parent -> child).",
          "explanation": "Lets say you have created a parent class with a constructor function inside it and then this class is inherited by another class then the constructor function of parent class will work for the child class as well. Now lets say you need a new parameter in your child class you have to create a constructor function for your child class but the parameters that can be initialized in the parent class will be initialized using the super() function. Super function will target the parent class.\nTypes of Inheritance:\n- Single Inheritance: 1 parent class, 1 child class.\n- Multiple Inheritance: Multiple Inheritance means there will be 2 parent classes and only 1 child class and the child class will inherit all the attributes and methods of both parents. Note - The constructor function will be inherited of the first class that has been Inherited. This is MRO (Method Resolution Order) followed by python.\n- Multilevel Inheritance: grandparent class → parent class → child class. The attributes and methods are passed on through all the classes.",
          "keyPoints": [
            "super().__init__(...): Invokes parent constructor to initialize inherited fields.",
            "Single Inheritance: Child(Parent).",
            "Multiple Inheritance: Child(ParentA, ParentB).",
            "MRO (Method Resolution Order): C3 Linearization algorithm determines lookup priority (inspect with ClassName.mro()).",
            "Multilevel Inheritance: ClassC(ClassB) where ClassB(ClassA)."
          ],
          "codeExamples": [
            {
              "title": "super() and Multilevel Inheritance",
              "code": "# Grandparent\nclass Person:\n    def __init__(self, name):\n        self.name = name\n\n# Parent\nclass Student(Person):\n    def __init__(self, name, student_id):\n        super().__init__(name)  # targets Person\n        self.student_id = student_id\n\n# Child (Multilevel)\nclass CodingStudent(Student):\n    def __init__(self, name, student_id, favorite_lang):\n        super().__init__(name, student_id)  # targets Student\n        self.favorite_lang = favorite_lang\n\ns = CodingStudent(\"Akarsh\", 101, \"Python\")\nprint(f\"{s.name} (ID: {s.student_id}) loves {s.favorite_lang}\")\nprint(\"MRO:\", [cls.__name__ for cls in CodingStudent.mro()])",
              "output": "Akarsh (ID: 101) loves Python\nMRO: ['CodingStudent', 'Student', 'Person', 'object']"
            }
          ],
          "notes": {
            "type": "important",
            "text": "MRO Note: In multiple inheritance class C(A, B), if both define the same method, Python looks in A first, then B."
          },
          "related": [
            "polymorphism-concept",
            "encapsulation-concept"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-24",
    "num": "24",
    "title": "Polymorphism",
    "page": 24,
    "topics": [
      {
        "id": "polymorphism-concept",
        "title": "Polymorphism, Method Overriding & Duck Typing",
        "chapter": "Polymorphism",
        "page": 24,
        "readTime": "3 min",
        "content": {
          "intro": "Polymorphism allows different object types to respond to the same interface or method call.",
          "definition": "Polymorphism means 'many forms'. It allows the same method name to behave differently depending on the object or context.",
          "explanation": "Polymorphism is a core concept in Object-Oriented Programming (OOP). The word means \"many forms\" — and in programming, it allows the same interface or method name to behave differently depending on the object or context. Polymorphism can be achieved in python in two ways well if we talk about compile time languages there are 3 ways but python does not support Method overloading. Method overloading means having same name methods inside a class but parameters will be different but in python the latest definition will overwrite the previous one.\n- Method Overriding: This is where a child class overrides a method of the parent class, and Python decides at runtime which method to call, based on the object type.\n- Duck Typing: Python follows the philosophy: 'If it walks like a duck and quacks like a duck, it must be a duck.' In the speak() function, we don’t care if it's a Duck or a Human — we only care that the object has a talk() method.",
          "keyPoints": [
            "Method Overloading: NOT supported in Python; redefining a method with same name simply replaces the previous one.",
            "Method Overriding: Child class redefines a parent method to provide specialized behavior.",
            "Duck Typing: 'If it walks like a duck and quacks like a duck, it's a duck.' Type checking is deferred to actual attribute/method presence at runtime."
          ],
          "codeExamples": [
            {
              "title": "Method Overriding and Duck Typing in Action",
              "code": "# 1. Method Overriding:\nclass Shape:\n    def area(self):\n        return 0\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14159 * self.r * self.r\n\nprint(\"Circle Area (Overridden):\", Circle(5).area())\n\n# 2. Duck Typing Philosophy:\nclass Duck:\n    def talk(self):\n        return \"Quack! Quack!\"\n\nclass Human:\n    def talk(self):\n        return \"Hello from Python!\"\n\ndef make_it_speak(entity):\n    # We don't check if entity is Duck or Human, only that it has .talk()\n    print(\"Entity speaks:\", entity.talk())\n\nmake_it_speak(Duck())\nmake_it_speak(Human())",
              "output": "Circle Area (Overridden): 78.53975\nEntity speaks: Quack! Quack!\nEntity speaks: Hello from Python!"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Duck typing is one of Python's most powerful idiomatic design principles."
          },
          "related": [
            "encapsulation-concept",
            "abstraction-concept"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-25",
    "num": "25",
    "title": "Encapsulation",
    "page": 25,
    "topics": [
      {
        "id": "encapsulation-concept",
        "title": "Encapsulation & Access Modifiers (Public, Protected, Private)",
        "chapter": "Encapsulation",
        "page": 25,
        "readTime": "3 min",
        "content": {
          "intro": "Encapsulation bundles data with the methods that operate on that data and controls visibility.",
          "definition": "Encapsulation means putting data (variables) and code (functions) together in one place — inside a class, and restricting direct external tampering.",
          "explanation": "Encapsulation means putting data (variables) and code (functions) together in one place — inside a class. It also means hiding the internal details of how things work, and only showing what is needed. It keeps data safe from being changed by mistake. It makes your code clean and easy to use. It gives control over what others can access or change.\nAccess modifiers in python:\n1. Public Attributes and Methods: Accessible from anywhere without restrictions.\n2. Protected Attributes and Methods: Created using a single underscore (_name). Python doesn't strictly enforce it, but by convention tells developers: 'Treat this as internal/protected'.\n3. Private Attributes and Methods: Cannot be accessed from outside the class. Uses two underscores (__name). Name mangling is applied by Python.",
          "keyPoints": [
            "Public (name): Free access everywhere.",
            "Protected (_name): Convention warning: internal to class and subclasses.",
            "Private (__name): Python mangles to _ClassName__name to prevent accidental outside overwrite."
          ],
          "codeExamples": [
            {
              "title": "Demonstration of Public, Protected, and Private Access",
              "code": "class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner          # Public\n        self._account_type = \"Savings\" # Protected (single _)\n        self.__balance = balance    # Private (double __)\n\n    def get_balance(self):          # Public getter method\n        return self.__balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n\nacc = BankAccount(\"Akarsh\", 5000)\nprint(\"Owner (Public):\", acc.owner)\nprint(\"Type (Protected):\", acc._account_type)\nprint(\"Balance via getter:\", acc.get_balance())\n\n# Attempting direct access to private attribute:\ntry:\n    print(acc.__balance)  # AttributeError\nexcept AttributeError as e:\n    print(\"Private access prevented:\", e)",
              "output": "Owner (Public): Akarsh\nType (Protected): Savings\nBalance via getter: 5000\nPrivate access prevented: 'BankAccount' object has no attribute '__balance'"
            }
          ],
          "notes": {
            "type": "warning",
            "text": "Name mangling: Python renames __balance internally to _BankAccount__balance. It is intended to prevent naming collisions, not cryptographic security."
          },
          "related": [
            "abstraction-concept",
            "dunder-methods"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-26",
    "num": "26",
    "title": "Abstraction",
    "page": 26,
    "topics": [
      {
        "id": "abstraction-concept",
        "title": "Abstraction & Abstract Classes (abc Module)",
        "chapter": "Abstraction",
        "page": 26,
        "readTime": "3 min",
        "content": {
          "intro": "Abstraction hides complex background implementation and exposes only the essential interface to the user.",
          "definition": "Abstraction simplifies complex systems by defining common interfaces while leaving concrete implementations to subclasses.",
          "explanation": "Abstraction does not exist in python natively but we can achieve it using a library we will see what is a library later (the 'abc' module: Abstract Base Classes). Abstraction is used to simplifying complex systems by focusing on essential features and hiding unnecessary details. It is used to define a common interface for different subclasses. Abstract classes are classes that contains one or more abstract methods. A method that is defined but not implemented in the abstract class. Subclasses must provide the implementation.",
          "keyPoints": [
            "Requires abc module: from abc import ABC, abstractmethod.",
            "Abstract classes cannot be instantiated directly.",
            "Subclasses MUST implement all @abstractmethod declarations or they cannot be instantiated."
          ],
          "codeExamples": [
            {
              "title": "Abstract Base Class with abc Module",
              "code": "from abc import ABC, abstractmethod\n\n# Abstract Class defining contract\nclass PaymentGateway(ABC):\n    @abstractmethod\n    def process_payment(self, amount):\n        pass\n\n# Concrete Subclass 1: UPI\nclass UPIPayment(PaymentGateway):\n    def process_payment(self, amount):\n        return f\"Processed INR {amount} via UPI successfully!\"\n\n# Concrete Subclass 2: Card\nclass CardPayment(PaymentGateway):\n    def process_payment(self, amount):\n        return f\"Charged card with INR {amount}.\"\n\n# Instantiating concrete implementations:\nupi = UPIPayment()\ncard = CardPayment()\nprint(upi.process_payment(999))\nprint(card.process_payment(4500))",
              "output": "Processed INR 999 via UPI successfully!\nCharged card with INR 4500."
            }
          ],
          "notes": {
            "type": "info",
            "text": "Attempting PaymentGateway() directly will raise TypeError: Can't instantiate abstract class PaymentGateway with abstract method."
          },
          "related": [
            "dunder-methods",
            "advance-questions-patterns"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-27",
    "num": "27",
    "title": "Dunder Methods",
    "page": 27,
    "topics": [
      {
        "id": "dunder-methods",
        "title": "What are Dunder Methods & Bank Management Project",
        "chapter": "Dunder Methods",
        "page": 27,
        "readTime": "4 min",
        "content": {
          "intro": "Dunder (Double Underscore) or magic methods let your classes integrate seamlessly with Python's core language syntax.",
          "definition": "Dunder methods are special methods that start and end with double underscores (e.g. __init__, __str__, __add__, __len__).",
          "explanation": "Dunder methods are special methods in Python that start and end with double underscores, like __init__, __str__, __add__, etc. They automatically get called when you perform certain actions on an object. They help you:\n- Customize behavior of your class\n- Make your class objects behave like built-in data types (like strings, lists, etc.)\nNow there are various dunder method see the video for some examples. Now lets create a Bank management project using Oops in python.",
          "keyPoints": [
            "__init__: Initializer/constructor.",
            "__str__: Friendly string representation for print(obj).",
            "__repr__: Unambiguous developer representation.",
            "__len__: Enables len(obj).",
            "__add__: Enables '+' operator between objects."
          ],
          "codeExamples": [
            {
              "title": "Dunder Methods in Action: Bank Management System",
              "code": "class BankAccount:\n    def __init__(self, acc_number, holder, balance=0):\n        self.acc_number = acc_number\n        self.holder = holder\n        self.balance = balance\n\n    # Dunder for readable string output when printed\n    def __str__(self):\n        return f\"BankAccount({self.acc_number}, Holder: {self.holder}, Balance: Rs.{self.balance})\"\n\n    # Dunder for adding two accounts together (operator overloading)\n    def __add__(self, other):\n        if isinstance(other, BankAccount):\n            return self.balance + other.balance\n        return NotImplemented\n\nacc1 = BankAccount(\"SB-001\", \"Akarsh\", 15000)\nacc2 = BankAccount(\"SB-002\", \"Alex\", 25000)\n\nprint(str(acc1))\nprint(str(acc2))\nprint(\"Combined balance of both accounts:\", acc1 + acc2)",
              "output": "BankAccount(SB-001, Holder: Akarsh, Balance: Rs.15000)\nBankAccount(SB-002, Holder: Alex, Balance: Rs.25000)\nCombined balance of both accounts: 40000"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Dunder methods are Python's way of enabling operator overloading and custom protocol implementation (iteration, context managers, slicing)."
          },
          "related": [
            "advance-questions-patterns",
            "decorators-args-kwargs"
          ]
        }
      }
    ]
  },
  {
    "id": "ch-28",
    "num": "28",
    "title": "Advance Topics & Questions",
    "page": 28,
    "topics": [
      {
        "id": "advance-questions-patterns",
        "title": "Advance Questions: Star Patterns & Strong Number",
        "chapter": "Advance Topics & Questions",
        "page": 28,
        "readTime": "4 min",
        "content": {
          "intro": "Algorithmic star patterns and mathematical logic problems from Page 28 of the book.",
          "definition": "Visual star patterns and factorial number checks.",
          "explanation": "This portion is only completed in video and here you will only see the Question so please watch the video to complete it. And you are good to go If you have completed till now but this section is for those who wants advance question solving skills.\nSome patterns first:\n1. Right angle triangle with stars\n2. Mirrored right angle triangle with stars\n3. A triangle with stars (Pyramid)\n4. A diamond with stars\nQuestion 1 - Strong number (Sum of factorials of digits equals number, e.g. 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145).",
          "keyPoints": [
            "Nested loops: Outer loop controls rows, inner loops control spaces and stars.",
            "Strong Number: Each digit is extracted, its factorial computed and accumulated."
          ],
          "codeExamples": [
            {
              "title": "Star Patterns and Strong Number Solutions",
              "code": "import math\n\n# 1. Right Angle Triangle (n=4)\nprint(\"1. Right Angle Triangle:\")\nfor i in range(1, 5):\n    print(\"* \" * i)\n\n# 2. Pyramid Triangle\nprint(\"\\n2. Pyramid Triangle:\")\nfor i in range(1, 4):\n    print(\" \" * (3 - i) + \"* \" * i)\n\n# 3. Strong Number Check (145 = 1! + 4! + 5! = 145)\nnum = 145\ntemp = num\nfact_sum = 0\nwhile temp > 0:\n    digit = temp % 10\n    fact_sum += math.factorial(digit)\n    temp //= 10\n\nprint(f\"\\nIs {num} a Strong Number? {fact_sum == num}\")",
              "output": "1. Right Angle Triangle:\n* \n* * \n* * * \n* * * * \n\n2. Pyramid Triangle:\n  * \n * * \n* * * \n\nIs 145 a Strong Number? True"
            }
          ],
          "notes": {
            "type": "info",
            "text": "Pattern problems build mental visualization and master multi-variable loop counters."
          },
          "related": [
            "decorators-args-kwargs",
            "comprehensions-lambda-map"
          ]
        }
      },
      {
        "id": "decorators-args-kwargs",
        "title": "Decorators, *args and **kwargs",
        "chapter": "Advance Topics & Questions",
        "page": 28,
        "readTime": "4 min",
        "content": {
          "intro": "Python Cake & Icing analogy for decorators and dynamic argument unpacking.",
          "definition": "A decorator is a function that takes another function as input, extends its behavior without modifying the original code, and returns the modified function.",
          "explanation": "Decorator:\nA decorator is just a function that modifies another function without changing its actual code. Imagine you have a cake (your function). A decorator is like putting icing on the cake. It doesn’t change the cake itself, but makes it better, prettier, or adds some new flavor. For creating a decorator you first have to create a decorator functions and then inside that we will create a wrapper. Its tough to understand with text see the video. For making the decorator with Arguments it is tough for this we will move towards our next advance stuff *args , **kwargs.\nArgs and Kwargs:\nThey’re special keywords in Python used in function definitions to accept a flexible number of arguments. Now you always don’t have to use Args and Kwargs the main thing is *, ** you can use any names in front of them. So *args are used for multiple positional arguments, and **kwargs are used for multiple key word arguments. And the *args becomes a tuple and **kwargs becomes a dictionary. The use case is great: You don’t need to know how many inputs you'll get; Helps in building flexible functions, decorators, APIs, and more.",
          "keyPoints": [
            "Cake & Icing analogy: Function = Cake; Decorator = Icing on top.",
            "*args: Gathers arbitrary positional arguments into a tuple.",
            "**kwargs: Gathers arbitrary keyword arguments into a dictionary.",
            "@decorator_name: Syntax sugar placed above function definition."
          ],
          "codeExamples": [
            {
              "title": "Decorator and *args, **kwargs Example",
              "code": "# Decorator with *args and **kwargs\ndef icing_decorator(original_function):\n    def wrapper(*args, **kwargs):\n        print(\"=== [ICING] Adding decorative sprinkles before execution ===\")\n        result = original_function(*args, **kwargs)\n        print(\"=== [ICING] Cake successfully decorated & served! ===\")\n        return result\n    return wrapper\n\n@icing_decorator\ndef bake_cake(flavor, layers=2):\n    print(f\"Baking a delicious {flavor} cake with {layers} layers.\")\n\nbake_cake(\"Chocolate\", layers=3)",
              "output": "=== [ICING] Adding decorative sprinkles before execution ===\nBaking a delicious Chocolate cake with 3 layers.\n=== [ICING] Cake successfully decorated & served! ==="
            }
          ],
          "notes": {
            "type": "important",
            "text": "*args unpacking expands lists/tuples; **kwargs unpacking expands dictionaries."
          },
          "related": [
            "comprehensions-lambda-map",
            "modules-and-packages"
          ]
        }
      },
      {
        "id": "comprehensions-lambda-map",
        "title": "Comprehensions, Lambda, Map, Filter & Zip",
        "chapter": "Advance Topics & Questions",
        "page": 28,
        "readTime": "4 min",
        "content": {
          "intro": "Concise, expressive functional tools in Python for transforming, filtering, and combining collections.",
          "definition": "Comprehensions provide concise syntax to build lists, dicts, and sets. Lambda creates inline anonymous functions. Map transforms items; filter selects items; zip pairs iterables.",
          "explanation": "List, Dictionary and Set Comprehension:\nAll of these Comprehensions are used to create List, Dictionary and set. But you don’t have to use multiple lines of code for loops and If-Else statements.\nLambda functions:\nA lambda function is an anonymous, inline function defined using the lambda keyword. It's often used for short, simple functions that are used only once or temporarily. You can have multiple arguments but there will be only one expression.\nMap filter and zip:\nMap is used for applying a function to multiple items. Takes a list (or any sequence), applies the same function to every item in that list, gives you back a new list (in Python 3, it gives a map object which you can convert to a list). Use map() when you want to transform every item in a list. It doesn’t remove or skip items (that’s what filter() does). You can use it with lambda or normal functions. Filter as the name suggest is used to filter out the stuff. Takes a list (or other sequence), checks each item using a function (a test), keeps only the items that pass the test (i.e., return True). Zip pairs up matching items from iterables.",
          "keyPoints": [
            "List comprehension: [x**2 for x in nums if x % 2 == 0].",
            "Dict comprehension: {x: x**2 for x in nums}.",
            "Lambda: lambda x, y: x + y.",
            "map(fn, seq): Applies fn to all elements.",
            "filter(predicate, seq): Keeps elements where predicate(x) is True.",
            "zip(seq1, seq2): Pairs elements into tuples."
          ],
          "codeExamples": [
            {
              "title": "Comprehensions, Lambda, Map, Filter, and Zip",
              "code": "nums = [1, 2, 3, 4, 5, 6]\n\n# 1. Comprehension (Squares of evens)\neven_squares = [x**2 for x in nums if x % 2 == 0]\nprint(\"List comprehension:\", even_squares)\n\n# 2. Lambda function\nadd = lambda a, b: a + b\nprint(\"Lambda add(10, 5):\", add(10, 5))\n\n# 3. Map (Double each item)\ndoubled = list(map(lambda x: x * 2, nums))\nprint(\"Map doubled:\", doubled)\n\n# 4. Filter (Only items > 3)\ngreater_than_3 = list(filter(lambda x: x > 3, nums))\nprint(\"Filter > 3:\", greater_than_3)\n\n# 5. Zip (Pair names with marks)\nnames = [\"Akarsh\", \"Alex\", \"Deep\"]\nmarks = [95, 92, 88]\nprint(\"Zip pairs:\", list(zip(names, marks)))",
              "output": "List comprehension: [4, 16, 36]\nLambda add(10, 5): 15\nMap doubled: [2, 4, 6, 8, 10, 12]\nFilter > 3: [4, 5, 6]\nZip pairs: [('Akarsh', 95), ('Alex', 92), ('Deep', 88)]"
            }
          ],
          "notes": {
            "type": "info",
            "text": "List comprehensions are typically faster than equivalent for-loops because they run at C-speed in the Python runtime."
          },
          "related": [
            "modules-and-packages",
            "advance-questions-patterns"
          ]
        }
      },
      {
        "id": "modules-and-packages",
        "title": "Modules, Packages & Akarsh Vyas (Python Academy) Closing Note",
        "chapter": "Advance Topics & Questions",
        "page": 28,
        "readTime": "3 min",
        "content": {
          "intro": "Structuring large Python projects with modules and packages, and concluding words from creator Akarsh Vyas.",
          "definition": "A module is a single Python file (.py). A package is a directory containing an __init__.py file and multiple modules.",
          "explanation": "Module is just a single file containing code and we can use this file code in other file:\n- A single Python file (.py)\n- Contains functions, variables, or classes\n- Used to organize and reuse code\nPython comes with lots of ready-to-use modules like:\n- math (for math operations)\n- random (for generating random numbers)\n- datetime (for date and time)\nA package is a folder that contains one or more modules (Python files). It may also contain sub-packages and you just have to use from and import keywords to use these things. You understood how these things work. There are third party packages as well like numpy, pandas, matplotlib etc. and we have to install all of these.\n\nClosing Note:\n\"And yes, we’ll be learning all of these and much more on this channel. I, Akarsh Vyas, as a creator and representative of Python Academy, would like to sincerely thank each and every one of you who stayed with us till the end. You are truly precious to us.\"",
          "keyPoints": [
            "import module_name: Imports entire module.",
            "from module_name import specific_function: Selective import.",
            "Built-in standard library: math, random, os, sys, datetime, json.",
            "Third-party packages installed via pip (pip install numpy pandas matplotlib).",
            "Special thanks to Python Academy & Akarsh Vyas!"
          ],
          "codeExamples": [
            {
              "title": "Using Built-in Modules in Python",
              "code": "import math\nimport random\nfrom datetime import datetime\n\n# Math module\nprint(\"Square root of 144:\", math.sqrt(144))\nprint(\"math.pi:\", round(math.pi, 4))\n\n# Random module\nprint(\"Random choice:\", random.choice([\"Python\", \"AI\", \"Python\"]))\n\n# Datetime module\nnow = datetime.now()\nprint(\"Current Timestamp:\", now.strftime(\"%Y-%m-%d %H:%M:%S\"))\n\nprint(\"\\n--- CONGRATULATIONS ON COMPLETING THE PYTHONIANS PYTHON NOTES! ---\")",
              "output": "Square root of 144: 12.0\nmath.pi: 3.1416\nRandom choice: Python\nCurrent Timestamp: 2026-10-30 19:30:00\n\n--- CONGRATULATIONS ON COMPLETING THE PYTHONIANS PYTHON NOTES! ---"
            }
          ],
          "notes": {
            "type": "important",
            "text": "Heartfelt thanks to Akarsh Vyas and the Coding Academy / Python Academy community for these complete notes!"
          },
          "related": [
            "comprehensions-lambda-map",
            "what-are-functions"
          ]
        }
      }
    ]
  }
];


/* ========================================================
   PYTHON - INTERACTIVE DIGITAL BOOK
   Coding Academy · Akarsh Vyas
   Complete Interactive Logic & Data-Driven Engine
   ======================================================== */

// --- DATA ACCESS HELPERS ---
const ALL_TOPICS = [];
const TOPIC_MAP = new Map();
const CHAPTER_MAP = new Map();

BOOK_DATA.forEach(chapter => {
  CHAPTER_MAP.set(chapter.id, chapter);
  chapter.topics.forEach(topic => {
    topic.chapterId = chapter.id;
    topic.chapterNum = chapter.num;
    topic.chapterTitle = chapter.title;
    ALL_TOPICS.push(topic);
    TOPIC_MAP.set(topic.id, topic);
  });
});

// --- STATE MANAGEMENT & LOCAL STORAGE ---
const STORAGE_KEYS = {
  BOOKMARKS: 'py_book_bookmarks',
  VISITED: 'py_book_visited',
  LAST_TOPIC: 'py_book_last_topic',
  RECENTS: 'py_book_recents',
  THEME: 'py_book_theme',
  SESSION: 'py_book_session_active_v2'
};

// --- 1. WEBSITE VIEW COUNTER ENGINE ---
const COUNTER_WORKSPACE = 'nitish-kumars-team-1-6098';
const COUNTER_NAME = 'first-counter-6098';
let currentViewCountDisplay = 'Loading...';

async function initViewCounter() {
  const sessionActive = sessionStorage.getItem(STORAGE_KEYS.SESSION);

  try {
    if (typeof Counter === 'undefined') {
      throw new Error('CounterAPI library failed to load.');
    }

    const counter = new Counter({ workspace: COUNTER_WORKSPACE });
    const result = sessionActive
      ? await counter.get(COUNTER_NAME)
      : await counter.up(COUNTER_NAME);
    const count = Number(result.data?.up_count);

    if (!Number.isSafeInteger(count) || count < 0) {
      throw new Error('CounterAPI returned an invalid visit count.');
    }

    if (!sessionActive) {
      sessionStorage.setItem(STORAGE_KEYS.SESSION, 'true');
    }

    updateViewCounterDisplays(count);
  } catch (error) {
    console.error('Unable to load the shared reader visit count:', error);
    updateViewCounterDisplays('Unavailable');
  }
}

function updateViewCounterDisplays(count) {
  currentViewCountDisplay = typeof count === 'number' ? count.toLocaleString() : count;
  const statEl = document.getElementById('statVisitsNum');
  const badgeEl = document.getElementById('visitorCountBadgeNum');
  if (statEl) statEl.textContent = currentViewCountDisplay;
  if (badgeEl) badgeEl.textContent = currentViewCountDisplay;
  const accountVisitsEl = document.getElementById('accountTotalVisits');
  if (accountVisitsEl) accountVisitsEl.textContent = currentViewCountDisplay;
}

// --- 2. DARK & LIGHT THEME ENGINE ---
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
  applyTheme(savedTheme, false);
}

function applyTheme(theme, showFeedback = false) {
  const effectiveTheme = (theme === 'light') ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', effectiveTheme);
  document.body.setAttribute('data-theme', effectiveTheme);
  localStorage.setItem(STORAGE_KEYS.THEME, effectiveTheme);

  const sunIcon = document.querySelector('.theme-sun');
  const moonIcon = document.querySelector('.theme-moon');
  const toggleBtn = document.getElementById('themeToggle');

  if (effectiveTheme === 'light') {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
    if (toggleBtn) {
      toggleBtn.title = 'Switch to Dark Mode';
      toggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    }
    if (showFeedback) showToast('Light Mode activated', 'info');
  } else {
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
    if (toggleBtn) {
      toggleBtn.title = 'Switch to Light Mode';
      toggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    }
    if (showFeedback) showToast('Dark Mode activated', 'info');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = (current === 'dark') ? 'light' : 'dark';
  applyTheme(newTheme, true);
}

let currentTopicId = null;
let bookmarks = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || '[]'));
let visitedTopics = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITED) || '[]'));
let recentTopics = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENTS) || '[]');
let lastTopicId = localStorage.getItem(STORAGE_KEYS.LAST_TOPIC);

function saveBookmarks() {
  saveLearningDataLocally();
  updateBookmarkUI();
  scheduleLearningDataSync();
}

function saveVisited() {
  saveLearningDataLocally();
  updateProgressUI();
  scheduleLearningDataSync();
}

function saveRecents(topicId) {
  recentTopics = [topicId, ...recentTopics.filter(id => id !== topicId)].slice(0, 5);
  localStorage.setItem(getLearningStorageKey(STORAGE_KEYS.RECENTS), JSON.stringify(recentTopics));
  renderRecents();
}

function saveLastTopic(topicId) {
  lastTopicId = topicId;
  localStorage.setItem(getLearningStorageKey(STORAGE_KEYS.LAST_TOPIC), topicId);
  updateContinueUI();
}

// --- DOM REFS ---
const DOM = {
  sidebarToggle: document.getElementById('sidebarToggle'),
  sidebar: document.getElementById('sidebar'),
  sidebarOverlay: document.getElementById('sidebarOverlay'),
  layout: document.getElementById('layout'),
  chapterNav: document.getElementById('chapterNav'),
  sidebarSearch: document.getElementById('sidebarSearch'),
  expandAllBtn: document.getElementById('expandAllBtn'),
  collapseAllBtn: document.getElementById('collapseAllBtn'),
  sbContinue: document.getElementById('sbContinue'),
  sbContinueTopic: document.getElementById('sbContinueTopic'),
  sbContinueBtn: document.getElementById('sbContinueBtn'),
  sbRecents: document.getElementById('sbRecents'),
  sbRecentList: document.getElementById('sbRecentList'),
  contentWrap: document.getElementById('contentWrap'),
  welcomeScreen: document.getElementById('welcomeScreen'),
  startReadingBtn: document.getElementById('startReadingBtn'),
  continueBtn: document.getElementById('continueBtn'),
  topicNavFooter: document.getElementById('topicNavFooter'),
  prevTopicBtn: document.getElementById('prevTopicBtn'),
  nextTopicBtn: document.getElementById('nextTopicBtn'),
  prevLabel: document.getElementById('prevLabel'),
  nextLabel: document.getElementById('nextLabel'),
  currentPageIndicator: document.getElementById('currentPageIndicator'),
  searchBox: document.getElementById('searchBox'),
  searchInput: document.getElementById('searchInput'),
  searchClear: document.getElementById('searchClear'),
  searchResults: document.getElementById('searchResults'),
  bookmarkToggle: document.getElementById('bookmarkToggle'),
  bookmarkCount: document.getElementById('bookmarkCount'),
  bookmarksPanel: document.getElementById('bookmarksPanel'),
  bookmarkClose: document.getElementById('bookmarkClose'),
  bookmarkList: document.getElementById('bookmarkList'),
  progressCircle: document.getElementById('progressCircle'),
  progressText: document.getElementById('progressText'),
  rpToc: document.getElementById('rpToc'),
  rpChapter: document.getElementById('rpChapter'),
  rpProgressFill: document.getElementById('rpProgressFill'),
  rpProgressLabel: document.getElementById('rpProgressLabel'),
  rpBookmarksSection: document.getElementById('rpBookmarksSection'),
  rpBookmarks: document.getElementById('rpBookmarks'),
  rpRelated: document.getElementById('rpRelated'),
  fullscreenBtn: document.getElementById('fullscreenBtn'),
  printBtn: document.getElementById('printBtn'),
  scrollTop: document.getElementById('scrollTop'),
  loadingOverlay: document.getElementById('loadingOverlay'),
  toast: document.getElementById('toast'),
  authButton: document.getElementById('authButton'),
  authSignOutButton: document.getElementById('authSignOutButton'),
  authDialog: document.getElementById('authDialog'),
  authForm: document.getElementById('authForm'),
  authTitle: document.getElementById('authTitle'),
  authEmail: document.getElementById('authEmail'),
  authPassword: document.getElementById('authPassword'),
  authSubmitButton: document.getElementById('authSubmitButton'),
  authGoogleButton: document.getElementById('authGoogleButton'),
  authSwitchPrompt: document.getElementById('authSwitchPrompt'),
  authSwitchButton: document.getElementById('authSwitchButton'),
  authCloseButton: document.getElementById('authCloseButton'),
  authStatus: document.getElementById('authStatus'),
  accountDialog: document.getElementById('accountDialog'),
  accountTitle: document.getElementById('accountTitle'),
  accountCloseButton: document.getElementById('accountCloseButton'),
  accountAvatar: document.getElementById('accountAvatar'),
  accountEmail: document.getElementById('accountEmail'),
  accountProvider: document.getElementById('accountProvider'),
  accountProgressPercent: document.getElementById('accountProgressPercent'),
  accountProgressFill: document.getElementById('accountProgressFill'),
  accountTopicsRead: document.getElementById('accountTopicsRead'),
  accountBookmarks: document.getElementById('accountBookmarks'),
  accountMemberSince: document.getElementById('accountMemberSince'),
  accountTotalVisits: document.getElementById('accountTotalVisits'),
  accountContinueButton: document.getElementById('accountContinueButton'),
  accountBookmarksButton: document.getElementById('accountBookmarksButton'),
  accountSignOutButton: document.getElementById('accountSignOutButton')
};

// --- AUTHENTICATION & ACCOUNT SYNC ---
let supabaseClient = null;
let currentUser = null;
let loadedUserId = null;
let authMode = 'signin';
let learningSyncTimer = null;
let learningSyncQueue = Promise.resolve();
let authStateVersion = 0;

function getLearningStorageKey(key, userId = currentUser?.id) {
  return userId ? `${key}:user:${userId}` : key;
}

function saveLearningDataLocally() {
  localStorage.setItem(getLearningStorageKey(STORAGE_KEYS.BOOKMARKS), JSON.stringify([...bookmarks]));
  localStorage.setItem(getLearningStorageKey(STORAGE_KEYS.VISITED), JSON.stringify([...visitedTopics]));
  localStorage.setItem(getLearningStorageKey(STORAGE_KEYS.RECENTS), JSON.stringify(recentTopics));
  if (lastTopicId) {
    localStorage.setItem(getLearningStorageKey(STORAGE_KEYS.LAST_TOPIC), lastTopicId);
  }
}

function scheduleLearningDataSync() {
  if (!supabaseClient || !currentUser || loadedUserId !== currentUser.id) return;
  clearTimeout(learningSyncTimer);
  learningSyncTimer = setTimeout(() => {
    const userId = currentUser.id;
    const data = {
      user_id: userId,
      bookmarks: [...bookmarks],
      visited_topics: [...visitedTopics],
      updated_at: new Date().toISOString()
    };
    learningSyncQueue = learningSyncQueue.then(async () => {
      if (currentUser?.id !== userId) return;
      const { error } = await supabaseClient
        .from('user_learning_data')
        .upsert(data, { onConflict: 'user_id' });
      if (error) throw error;
    }).catch(error => {
      console.error('Unable to sync learning data:', error);
      showToast('Unable to sync your progress. Please try again.', 'error');
    });
  }, 400);
}

function refreshLearningUI() {
  updateBookmarkUI();
  updateProgressUI();
  updateContinueUI();
  renderRecents();
  renderAccountUI();
  ALL_TOPICS.forEach(topic => {
    const link = document.getElementById(`nav-topic-${topic.id}`);
    if (link) link.classList.toggle('bookmarked', bookmarks.has(topic.id));
  });
}

function renderAccountUI() {
  if (!currentUser || !DOM.accountDialog) return;
  const metadata = currentUser.user_metadata || {};
  const email = currentUser.email || 'Signed in with Google';
  const displayName = metadata.full_name || metadata.name || email.split('@')[0];
  const provider = currentUser.app_metadata?.provider === 'google' ? 'Google account' : 'Email account';
  const progress = ALL_TOPICS.length
    ? Math.round((visitedTopics.size / ALL_TOPICS.length) * 100)
    : 0;
  const memberSince = currentUser.created_at
    ? new Date(currentUser.created_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
    : '—';

  DOM.accountTitle.textContent = displayName;
  DOM.accountAvatar.textContent = displayName.trim().charAt(0).toUpperCase() || '?';
  DOM.accountEmail.textContent = email;
  DOM.accountProvider.textContent = provider;
  DOM.accountProgressPercent.textContent = `${progress}%`;
  DOM.accountProgressFill.style.width = `${progress}%`;
  DOM.accountTopicsRead.textContent = visitedTopics.size.toLocaleString();
  DOM.accountBookmarks.textContent = bookmarks.size.toLocaleString();
  DOM.accountMemberSince.textContent = memberSince;
  DOM.accountTotalVisits.textContent = currentViewCountDisplay;
  DOM.accountContinueButton.textContent = lastTopicId ? 'Continue reading' : 'Start reading';
}

function setAuthMode(mode) {
  authMode = mode;
  const isSignUp = mode === 'signup';
  DOM.authTitle.textContent = isSignUp ? 'Create an account' : 'Sign in';
  DOM.authSubmitButton.textContent = isSignUp ? 'Create account' : 'Sign in';
  DOM.authSwitchPrompt.textContent = isSignUp ? 'Already have an account?' : 'New here?';
  DOM.authSwitchButton.textContent = isSignUp ? 'Sign in' : 'Create an account';
  DOM.authPassword.autocomplete = isSignUp ? 'new-password' : 'current-password';
  DOM.authStatus.textContent = '';
}

function updateAuthUI() {
  if (!DOM.authButton || !DOM.authSignOutButton) return;
  DOM.authButton.textContent = currentUser ? 'Account' : 'Sign in';
  DOM.authButton.title = currentUser ? `Signed in as ${currentUser.email}` : 'Sign in to sync progress';
  DOM.authSignOutButton.style.display = currentUser ? 'inline-flex' : 'none';
  if (currentUser && DOM.authDialog.open) DOM.authDialog.close();
}

function restoreGuestLearningData() {
  bookmarks = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || '[]'));
  visitedTopics = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITED) || '[]'));
  recentTopics = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENTS) || '[]');
  lastTopicId = localStorage.getItem(STORAGE_KEYS.LAST_TOPIC);
  refreshLearningUI();
}

async function loadAccountLearningData(user, version, mergeGuestData) {
  const guestBookmarks = new Set(bookmarks);
  const guestVisitedTopics = new Set(visitedTopics);
  const guestRecentTopics = [...recentTopics];
  const guestLastTopicId = lastTopicId;
  const bookmarkKey = getLearningStorageKey(STORAGE_KEYS.BOOKMARKS, user.id);
  const visitedKey = getLearningStorageKey(STORAGE_KEYS.VISITED, user.id);
  const hasLocalAccountData = localStorage.getItem(bookmarkKey) !== null
    || localStorage.getItem(visitedKey) !== null;
  const localBookmarks = new Set(JSON.parse(localStorage.getItem(bookmarkKey) || '[]'));
  const localVisitedTopics = new Set(JSON.parse(localStorage.getItem(visitedKey) || '[]'));
  const { data, error } = await supabaseClient
    .from('user_learning_data')
    .select('bookmarks, visited_topics')
    .eq('user_id', user.id)
    .maybeSingle();

  if (error) throw error;
  if (version !== authStateVersion) return;

  bookmarks = new Set(data?.bookmarks || []);
  visitedTopics = new Set(data?.visited_topics || []);
  localBookmarks.forEach(id => bookmarks.add(id));
  localVisitedTopics.forEach(id => visitedTopics.add(id));
  if (mergeGuestData) {
    guestBookmarks.forEach(id => bookmarks.add(id));
    guestVisitedTopics.forEach(id => visitedTopics.add(id));
  }

  recentTopics = JSON.parse(localStorage.getItem(
    getLearningStorageKey(STORAGE_KEYS.RECENTS, user.id)
  ) || '[]');
  lastTopicId = localStorage.getItem(getLearningStorageKey(STORAGE_KEYS.LAST_TOPIC, user.id));
  if (mergeGuestData) {
    if (!recentTopics.length) recentTopics = guestRecentTopics;
    if (!lastTopicId) lastTopicId = guestLastTopicId;
  }

  saveLearningDataLocally();
  currentUser = user;
  loadedUserId = user.id;
  refreshLearningUI();
  if (!data || hasLocalAccountData || mergeGuestData) scheduleLearningDataSync();
}

async function handleAuthStateChange(session) {
  const version = ++authStateVersion;
  const nextUser = session?.user || null;
  const previousUserId = currentUser?.id || null;
  currentUser = nextUser;
  updateAuthUI();

  if (!nextUser) {
    if (loadedUserId) restoreGuestLearningData();
    loadedUserId = null;
    return;
  }
  if (loadedUserId === nextUser.id) return;

  try {
    await loadAccountLearningData(nextUser, version, !previousUserId);
  } catch (error) {
    console.error('Unable to load account learning data:', error);
    showToast('Unable to load your saved progress. Check the Supabase setup.', 'error');
  }
}

function initAuth() {
  DOM.authButton.addEventListener('click', () => {
    if (currentUser) {
      renderAccountUI();
      DOM.accountDialog.showModal();
      return;
    }
    if (!supabaseClient) {
      showToast('Set the Supabase URL and publishable key in supabase-config.js.', 'error');
      return;
    }
    setAuthMode('signin');
    DOM.authDialog.showModal();
  });
  DOM.authSignOutButton.addEventListener('click', async () => {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
      showToast('You have signed out.', 'info');
    } catch (error) {
      console.error('Unable to sign out:', error);
      showToast(error.message || 'Unable to sign out. Please try again.', 'error');
    }
  });
  DOM.authCloseButton.addEventListener('click', () => DOM.authDialog.close());
  DOM.accountCloseButton.addEventListener('click', () => DOM.accountDialog.close());
  DOM.accountContinueButton.addEventListener('click', () => {
    DOM.accountDialog.close();
    const topic = TOPIC_MAP.get(lastTopicId) || ALL_TOPICS[0];
    if (topic) navigateToTopic(topic.id);
  });
  DOM.accountBookmarksButton.addEventListener('click', () => {
    DOM.accountDialog.close();
    openBookmarksPanel();
  });
  DOM.accountSignOutButton.addEventListener('click', () => DOM.authSignOutButton.click());
  DOM.authSwitchButton.addEventListener('click', () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  });
  DOM.authGoogleButton.addEventListener('click', async () => {
    DOM.authGoogleButton.disabled = true;
    DOM.authStatus.textContent = '';
    try {
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Google sign-in failed:', error);
      DOM.authStatus.textContent = error.message || 'Google sign-in failed. Please try again.';
      DOM.authGoogleButton.disabled = false;
    }
  });
  DOM.authForm.addEventListener('submit', async event => {
    event.preventDefault();
    const email = DOM.authEmail.value.trim();
    const password = DOM.authPassword.value;
    DOM.authSubmitButton.disabled = true;
    DOM.authStatus.textContent = '';
    try {
      const result = authMode === 'signup'
        ? await supabaseClient.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin }
        })
        : await supabaseClient.auth.signInWithPassword({ email, password });
      if (result.error) throw result.error;
      if (authMode === 'signup' && !result.data.session) {
        DOM.authStatus.textContent = 'Check your email to confirm your account, then sign in.';
      } else {
        DOM.authDialog.close();
        DOM.authForm.reset();
        showToast(authMode === 'signup' ? 'Account created.' : 'Signed in.', 'success');
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      DOM.authStatus.textContent = error.message || 'Authentication failed. Please try again.';
    } finally {
      DOM.authSubmitButton.disabled = false;
    }
  });

  const config = window.SUPABASE_CONFIG;
  if (!window.supabase?.createClient || !config?.url || !config?.publishableKey) {
    return;
  }

  supabaseClient = window.supabase.createClient(config.url, config.publishableKey);
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => {
      void handleAuthStateChange(session);
    }, 0);
  });
}

// --- TOAST NOTIFICATION ---
let toastTimer = null;
function showToast(message, type = 'success') {
  if (!DOM.toast) return;
  DOM.toast.textContent = message;
  DOM.toast.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    DOM.toast.className = 'toast';
  }, 2400);
}

// --- SIDEBAR RENDERING ---
function renderSidebar() {
  if (!DOM.chapterNav) return;
  DOM.chapterNav.innerHTML = '';

  BOOK_DATA.forEach(chapter => {
    const chDiv = document.createElement('div');
    chDiv.className = 'chapter-item';
    chDiv.id = `nav-${chapter.id}`;

    const header = document.createElement('div');
    header.className = 'chapter-header';
    header.innerHTML = `
      <div class="ch-toggle">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
      <span class="ch-num">${chapter.num}</span>
      <span class="ch-title">${escapeHTML(chapter.title)}</span>
      <span class="ch-page">P.${chapter.page}</span>
    `;

    header.addEventListener('click', (e) => {
      e.stopPropagation();
      chDiv.classList.toggle('open');
    });

    const topicsList = document.createElement('div');
    topicsList.className = 'chapter-topics';

    chapter.topics.forEach(topic => {
      const topicEl = document.createElement('div');
      topicEl.className = 'topic-link';
      topicEl.id = `nav-topic-${topic.id}`;
      if (bookmarks.has(topic.id)) topicEl.classList.add('bookmarked');
      if (visitedTopics.has(topic.id)) topicEl.classList.add('visited');

      topicEl.innerHTML = `
        <span>${escapeHTML(topic.title)}</span>
        <span class="tl-page">p.${topic.page}</span>
      `;

      topicEl.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateToTopic(topic.id);
        if (window.innerWidth <= 768) {
          closeMobileSidebar();
        }
      });

      topicsList.appendChild(topicEl);
    });

    chDiv.appendChild(header);
    chDiv.appendChild(topicsList);
    DOM.chapterNav.appendChild(chDiv);
  });
}

function updateActiveSidebar(topicId) {
  document.querySelectorAll('.topic-link').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.chapter-header').forEach(el => el.classList.remove('active-chapter'));

  const activeLink = document.getElementById(`nav-topic-${topicId}`);
  if (activeLink) {
    activeLink.classList.add('active');
    activeLink.classList.add('visited');
    const parentChapter = activeLink.closest('.chapter-item');
    if (parentChapter) {
      parentChapter.classList.add('open');
      const hdr = parentChapter.querySelector('.chapter-header');
      if (hdr) hdr.classList.add('active-chapter');
    }
    activeLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

// Expand / Collapse All
if (DOM.expandAllBtn) {
  DOM.expandAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.chapter-item').forEach(el => el.classList.add('open'));
  });
}

if (DOM.collapseAllBtn) {
  DOM.collapseAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.chapter-item').forEach(el => el.classList.remove('open'));
  });
}

// Sidebar Filter
if (DOM.sidebarSearch) {
  DOM.sidebarSearch.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.chapter-item').forEach(ch => {
      let anyMatch = false;
      const topicLinks = ch.querySelectorAll('.topic-link');
      topicLinks.forEach(tl => {
        const text = tl.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          tl.style.display = 'flex';
          anyMatch = true;
        } else {
          tl.style.display = 'none';
        }
      });
      if (!q) {
        ch.style.display = '';
      } else if (anyMatch) {
        ch.style.display = '';
        ch.classList.add('open');
      } else {
        ch.style.display = 'none';
      }
    });
  });
}

// --- CONTENT RENDERING ---
function renderTopicContent(topic) {
  if (!topic || !DOM.contentWrap) return;
  currentTopicId = topic.id;

  // Mark visited
  visitedTopics.add(topic.id);
  saveVisited();
  saveRecents(topic.id);
  saveLastTopic(topic.id);
  updateActiveSidebar(topic.id);

  const isBookmarked = bookmarks.has(topic.id);

  let html = `
    <div class="content-anim">
      <!-- Breadcrumb badge -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="chapter-badge">Chapter ${topic.chapterNum} · ${escapeHTML(topic.chapterTitle)}</span>
        <button class="bookmark-btn-inline ${isBookmarked ? 'active' : ''}" id="inlineBookmarkBtn" title="Bookmark topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="${isBookmarked ? '#F5E65A' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
          <span>${isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
        </button>
      </div>

      <h1 class="topic-title" id="sec-title">${escapeHTML(topic.title)}</h1>
      <div class="reading-time">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        <span>Estimated read: ${topic.readTime || '3 min'} · Reference Page: ${topic.page}</span>
      </div>

      <hr class="content-divider" />
  `;

  // Definition Box
  if (topic.content.definition) {
    html += `
      <div class="definition-box" id="sec-definition">
        <div class="def-label">Definition & Concept</div>
        <p>${formatText(topic.content.definition)}</p>
      </div>
    `;
  }

  // Explanation
  if (topic.content.explanation) {
    html += `
      <div class="topic-section" id="sec-explanation">
        <div class="section-label">Detailed Notes & Book Content</div>
        <div class="explanation">${formatParagraphs(topic.content.explanation)}</div>
      </div>
    `;
  }

  // Key Points
  if (topic.content.keyPoints && topic.content.keyPoints.length > 0) {
    html += `
      <div class="key-points" id="sec-keypoints">
        <div class="key-points-title">Key Rules & Core Concepts</div>
        <ul>
          ${topic.content.keyPoints.map(kp => `<li>${formatText(kp)}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Code Examples
  if (topic.content.codeExamples && topic.content.codeExamples.length > 0) {
    html += `<div class="topic-section" id="sec-examples">
      <div class="section-label">Python Code & Executable Examples</div>`;

    topic.content.codeExamples.forEach((ex, idx) => {
      html += `
        <div class="code-block-wrap">
          <div class="code-block-header">
            <div>
              <span class="code-lang">Python</span>
              <span class="code-label">${escapeHTML(ex.title || `Example ${idx + 1}`)}</span>
            </div>
            <button class="copy-btn" data-code="${encodeURIComponent(ex.code)}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              <span>Copy</span>
            </button>
          </div>
          <div class="code-block-body">
            <pre><code class="language-python">${escapeHTML(ex.code)}</code></pre>
          </div>
        </div>
      `;

      if (ex.output) {
        html += `
          <div class="output-block">
            <div class="output-label">Expected Output</div>
            <pre>${escapeHTML(ex.output)}</pre>
          </div>
        `;
      }
    });

    html += `</div>`;
  }

  // Notes/Warning Box
  if (topic.content.notes) {
    const n = topic.content.notes;
    html += `
      <div class="note-box ${n.type || 'info'}" id="sec-notes">
        <div class="nb-icon">
          ${n.type === 'warning' ? '⚠' : n.type === 'important' ? '★' : 'ℹ'}
        </div>
        <p>${formatText(n.text)}</p>
      </div>
    `;
  }

  // Python Credit Footer
  html += `
    <div class="book-credit">
      PYTHON · Interactive Digital Programming Textbook & Practice Reference
      <br />Designed for intuitive visual learning, syntax clarity, and conceptual mastery.
    </div>
  </div>`;

  DOM.contentWrap.innerHTML = html;
  DOM.topicNavFooter.style.display = 'flex';

  // Highlight syntax with Prism
  if (window.Prism) {
    Prism.highlightAllUnder(DOM.contentWrap);
  }

  // Attach copy listeners
  DOM.contentWrap.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = decodeURIComponent(btn.getAttribute('data-code'));
      navigator.clipboard.writeText(code).then(() => {
        btn.classList.add('copied');
        btn.querySelector('span').textContent = 'Copied!';
        showToast('Code copied to clipboard!', 'success');
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.querySelector('span').textContent = 'Copy';
        }, 2000);
      });
    });
  });

  // Attach inline bookmark listener
  const inlineBookmarkBtn = document.getElementById('inlineBookmarkBtn');
  if (inlineBookmarkBtn) {
    inlineBookmarkBtn.addEventListener('click', () => {
      toggleBookmark(topic.id);
      const active = bookmarks.has(topic.id);
      inlineBookmarkBtn.classList.toggle('active', active);
      inlineBookmarkBtn.querySelector('span').textContent = active ? 'Bookmarked' : 'Bookmark';
      inlineBookmarkBtn.querySelector('svg').setAttribute('fill', active ? '#F5E65A' : 'none');
    });
  }

  // Update navigation buttons
  updateNavFooter(topic);
  updateRightPanel(topic);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavFooter(topic) {
  const currentIndex = ALL_TOPICS.findIndex(t => t.id === topic.id);

  if (currentIndex > 0) {
    const prevTopic = ALL_TOPICS[currentIndex - 1];
    DOM.prevTopicBtn.disabled = false;
    DOM.prevLabel.textContent = prevTopic.title;
    DOM.prevTopicBtn.onclick = () => navigateToTopic(prevTopic.id);
  } else {
    DOM.prevTopicBtn.disabled = true;
    DOM.prevLabel.textContent = 'Start of Book';
    DOM.prevTopicBtn.onclick = null;
  }

  if (currentIndex < ALL_TOPICS.length - 1) {
    const nextTopic = ALL_TOPICS[currentIndex + 1];
    DOM.nextTopicBtn.disabled = false;
    DOM.nextLabel.textContent = nextTopic.title;
    DOM.nextTopicBtn.onclick = () => navigateToTopic(nextTopic.id);
  } else {
    DOM.nextTopicBtn.disabled = true;
    DOM.nextLabel.textContent = 'End of Book';
    DOM.nextTopicBtn.onclick = null;
  }

  DOM.currentPageIndicator.textContent = `Topic ${currentIndex + 1} of ${ALL_TOPICS.length} · Page ${topic.page}`;
}

// --- RIGHT PANEL UPDATES ---
function updateRightPanel(topic) {
  if (DOM.rpChapter) {
    DOM.rpChapter.textContent = `Ch ${topic.chapterNum}: ${topic.chapterTitle}`;
  }

  // TOC
  if (DOM.rpToc) {
    DOM.rpToc.innerHTML = '';
    const sections = [
      { id: 'sec-title', label: 'Top' },
      { id: 'sec-definition', label: 'Definition' },
      { id: 'sec-explanation', label: 'Book Notes' },
      { id: 'sec-keypoints', label: 'Key Rules' },
      { id: 'sec-examples', label: 'Python Code' },
      { id: 'sec-notes', label: 'Important Note' }
    ];

    sections.forEach(s => {
      const target = document.getElementById(s.id);
      if (target) {
        const li = document.createElement('li');
        li.textContent = s.label;
        li.addEventListener('click', () => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        DOM.rpToc.appendChild(li);
      }
    });
  }

  // Related Topics
  if (DOM.rpRelated) {
    DOM.rpRelated.innerHTML = '';
    const relatedIds = topic.content.related || [];
    relatedIds.forEach(relId => {
      const relTopic = TOPIC_MAP.get(relId);
      if (relTopic) {
        const li = document.createElement('li');
        li.textContent = relTopic.title;
        li.addEventListener('click', () => navigateToTopic(relTopic.id));
        DOM.rpRelated.appendChild(li);
      }
    });
  }
}

// --- BOOKMARKS SYSTEM ---
function toggleBookmark(topicId) {
  const navLink = document.getElementById(`nav-topic-${topicId}`);
  if (bookmarks.has(topicId)) {
    bookmarks.delete(topicId);
    showToast('Bookmark removed', 'error');
    if (navLink) navLink.classList.remove('bookmarked');
  } else {
    bookmarks.add(topicId);
    showToast('Topic bookmarked!', 'success');
    if (navLink) navLink.classList.add('bookmarked');
  }
  saveBookmarks();
}

function updateBookmarkUI() {
  const count = bookmarks.size;
  if (DOM.bookmarkCount) {
    DOM.bookmarkCount.textContent = count;
    DOM.bookmarkCount.style.display = count > 0 ? 'flex' : 'none';
  }

  // Slide panel list
  if (DOM.bookmarkList) {
    DOM.bookmarkList.innerHTML = '';
    if (count === 0) {
      DOM.bookmarkList.innerHTML = '<div class="bp-empty">No bookmarked topics yet.<br/><small style="color:var(--text-muted)">Click the bookmark icon on any topic to save it here.</small></div>';
    } else {
      bookmarks.forEach(tId => {
        const t = TOPIC_MAP.get(tId);
        if (!t) return;
        const item = document.createElement('div');
        item.className = 'bp-item';
        item.innerHTML = `
          <div class="bp-item-info">
            <div class="bp-item-title">${escapeHTML(t.title)}</div>
            <div class="bp-item-chapter">Ch ${t.chapterNum} · P.${t.page}</div>
          </div>
          <button class="bp-remove" title="Remove">✕</button>
        `;
        item.querySelector('.bp-item-info').addEventListener('click', () => {
          navigateToTopic(t.id);
          closeBookmarksPanel();
        });
        item.querySelector('.bp-remove').addEventListener('click', (e) => {
          e.stopPropagation();
          toggleBookmark(t.id);
        });
        DOM.bookmarkList.appendChild(item);
      });
    }
  }

  // Right sidebar bookmarks
  if (DOM.rpBookmarks && DOM.rpBookmarksSection) {
    DOM.rpBookmarks.innerHTML = '';
    if (count > 0) {
      DOM.rpBookmarksSection.style.display = 'block';
      [...bookmarks].slice(0, 4).forEach(tId => {
        const t = TOPIC_MAP.get(tId);
        if (t) {
          const li = document.createElement('li');
          li.textContent = t.title;
          li.addEventListener('click', () => navigateToTopic(t.id));
          DOM.rpBookmarks.appendChild(li);
        }
      });
    } else {
      DOM.rpBookmarksSection.style.display = 'none';
    }
  }
}

function openBookmarksPanel() {
  if (DOM.bookmarksPanel) DOM.bookmarksPanel.classList.add('open');
}
function closeBookmarksPanel() {
  if (DOM.bookmarksPanel) DOM.bookmarksPanel.classList.remove('open');
}

if (DOM.bookmarkToggle) {
  DOM.bookmarkToggle.addEventListener('click', () => {
    DOM.bookmarksPanel.classList.toggle('open');
  });
}
if (DOM.bookmarkClose) {
  DOM.bookmarkClose.addEventListener('click', closeBookmarksPanel);
}

// --- READING PROGRESS SYSTEM ---
function updateProgressUI() {
  const total = ALL_TOPICS.length;
  const visited = visitedTopics.size;
  const pct = total > 0 ? Math.round((visited / total) * 100) : 0;

  // Header circular ring
  if (DOM.progressText) DOM.progressText.textContent = `${pct}%`;
  if (DOM.progressCircle) {
    const circumference = 2 * Math.PI * 14; // r=14 -> ~87.96
    const offset = circumference - (pct / 100) * circumference;
    DOM.progressCircle.style.strokeDashoffset = offset;
  }

  // Right panel bar
  if (DOM.rpProgressFill) DOM.rpProgressFill.style.width = `${pct}%`;
  if (DOM.rpProgressLabel) DOM.rpProgressLabel.textContent = `${visited} of ${total} topics read (${pct}%)`;
}

// Continue Reading card
function updateContinueUI() {
  const lastId = lastTopicId;
  const t = TOPIC_MAP.get(lastId);

  if (t && DOM.sbContinue && DOM.sbContinueTopic) {
    DOM.sbContinue.style.display = 'block';
    DOM.sbContinueTopic.textContent = `${t.title} (Ch ${t.chapterNum})`;
    DOM.sbContinueBtn.onclick = () => navigateToTopic(t.id);
  }

  if (t && DOM.continueBtn) {
    DOM.continueBtn.style.display = 'inline-block';
    DOM.continueBtn.textContent = `Continue: ${t.title} →`;
    DOM.continueBtn.onclick = () => navigateToTopic(t.id);
  }
}

// Recently visited list
function renderRecents() {
  if (!DOM.sbRecents || !DOM.sbRecentList) return;
  DOM.sbRecentList.innerHTML = '';

  if (recentTopics.length > 0) {
    DOM.sbRecents.style.display = 'block';
    recentTopics.forEach(id => {
      const t = TOPIC_MAP.get(id);
      if (t) {
        const li = document.createElement('li');
        li.textContent = t.title;
        li.addEventListener('click', () => navigateToTopic(t.id));
        DOM.sbRecentList.appendChild(li);
      }
    });
  } else {
    DOM.sbRecents.style.display = 'none';
  }
}

// --- GLOBAL SEARCH ENGINE ---
let searchSelectedIndex = -1;

function executeSearch(query) {
  if (!DOM.searchResults) return;
  const q = query.toLowerCase().trim();

  if (!q) {
    DOM.searchResults.classList.remove('visible');
    DOM.searchResults.innerHTML = '';
    if (DOM.searchClear) DOM.searchClear.style.display = 'none';
    return;
  }

  if (DOM.searchClear) DOM.searchClear.style.display = 'block';

  const matches = [];

  ALL_TOPICS.forEach(topic => {
    let score = 0;
    const tTitle = topic.title.toLowerCase();
    const chTitle = topic.chapterTitle.toLowerCase();
    const def = (topic.content.definition || '').toLowerCase();
    const exp = (topic.content.explanation || '').toLowerCase();

    // Check matches
    if (tTitle.includes(q)) score += 10;
    if (chTitle.includes(q)) score += 5;
    if (def.includes(q)) score += 3;
    if (exp.includes(q)) score += 2;

    if (topic.content.codeExamples) {
      topic.content.codeExamples.forEach(ce => {
        if (ce.code.toLowerCase().includes(q)) score += 4;
      });
    }

    if (score > 0) {
      matches.push({ topic, score });
    }
  });

  matches.sort((a, b) => b.score - a.score);

  if (matches.length === 0) {
    DOM.searchResults.innerHTML = `<div class="sr-empty">No results found for "<strong>${escapeHTML(query)}</strong>"</div>`;
  } else {
    DOM.searchResults.innerHTML = matches.slice(0, 15).map((m, idx) => {
      const t = m.topic;
      const highlightedTitle = highlightMatch(t.title, query);
      return `
        <div class="search-result-item" data-id="${t.id}" data-index="${idx}">
          <div class="sr-title">${highlightedTitle}</div>
          <div class="sr-meta">
            <span class="sr-chapter">Ch ${t.chapterNum}: ${escapeHTML(t.chapterTitle)}</span>
            <span class="sr-page">Page ${t.page}</span>
          </div>
        </div>
      `;
    }).join('');

    DOM.searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const tid = item.getAttribute('data-id');
        navigateToTopic(tid);
        closeSearch();
      });
    });
  }

  searchSelectedIndex = -1;
  DOM.searchResults.classList.add('visible');
}

function highlightMatch(text, query) {
  if (!query) return escapeHTML(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return escapeHTML(text).replace(regex, '<mark>$1</mark>');
}

function closeSearch() {
  if (DOM.searchResults) DOM.searchResults.classList.remove('visible');
  if (DOM.searchInput) DOM.searchInput.value = '';
  if (DOM.searchClear) DOM.searchClear.style.display = 'none';
  searchSelectedIndex = -1;
}

if (DOM.searchInput) {
  DOM.searchInput.addEventListener('input', (e) => executeSearch(e.target.value));

  DOM.searchInput.addEventListener('keydown', (e) => {
    const items = DOM.searchResults ? DOM.searchResults.querySelectorAll('.search-result-item') : [];
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      searchSelectedIndex = (searchSelectedIndex + 1) % items.length;
      updateSearchSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      searchSelectedIndex = (searchSelectedIndex - 1 + items.length) % items.length;
      updateSearchSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchSelectedIndex >= 0 && items[searchSelectedIndex]) {
        const tid = items[searchSelectedIndex].getAttribute('data-id');
        navigateToTopic(tid);
        closeSearch();
      }
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });
}

function updateSearchSelection(items) {
  items.forEach((item, idx) => {
    item.classList.toggle('active', idx === searchSelectedIndex);
    if (idx === searchSelectedIndex) {
      item.scrollIntoView({ block: 'nearest' });
    }
  });
}

if (DOM.searchClear) {
  DOM.searchClear.addEventListener('click', closeSearch);
}

// Global click to close search and bookmarks
document.addEventListener('click', (e) => {
  if (DOM.searchWrapper && !DOM.searchWrapper.contains(e.target)) {
    closeSearch();
  }
  if (DOM.bookmarksPanel && !DOM.bookmarksPanel.contains(e.target) && !DOM.bookmarkToggle.contains(e.target)) {
    closeBookmarksPanel();
  }
});

// Keyboard Shortcut: Ctrl + K
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (DOM.searchInput) {
      DOM.searchInput.focus();
      DOM.searchInput.select();
    }
  }
});

// --- NAVIGATION & ROUTING ---

// --- HOMEPAGE / WELCOME SCREEN CONTROLLER ---
function showWelcomeScreen() {
  currentTopicId = null;
  history.pushState(null, '', window.location.pathname);

  // Clear active highlights in sidebar
  document.querySelectorAll('.topic-link').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.chapter-header').forEach(el => el.classList.remove('active-chapter'));

  if (!DOM.contentWrap) return;

  const currentVisits = currentViewCountDisplay;

  DOM.contentWrap.innerHTML = `
    <div class="welcome-screen content-anim" id="welcomeScreen">
      <div class="welcome-icon">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#F5E65A" opacity="0.1"/>
          <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-family="JetBrains Mono" fill="#F5E65A" font-weight="700">Py</text>
        </svg>
      </div>
      <h1 class="welcome-title">PYTHON</h1>
      <p class="welcome-subtitle">Interactive Programming Notes</p>
      <p class="welcome-desc">Interactive Digital Programming Textbook</p>
      
      <!-- Website View Counter Badge on Homepage -->
      <div class="welcome-visitor-badge" id="welcomeVisitorBadge" title="Total unique visitor sessions">
        <span class="badge-pulse"></span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span class="visitor-badge-text">Total Reader Visits: <strong id="visitorCountBadgeNum">${currentVisits}</strong></span>
      </div>

      <div class="welcome-actions">
        <button class="btn-primary" id="startReadingBtn">Start Reading →</button>
        <button class="btn-ghost" id="continueBtn" style="display:none">Continue Reading</button>
      </div>
      <div class="welcome-stats">
        <div class="stat"><span class="stat-num">28+</span><span class="stat-label">Chapters</span></div>
        <div class="stat"><span class="stat-num">70+</span><span class="stat-label">Topics</span></div>
        <div class="stat"><span class="stat-num">100+</span><span class="stat-label">Examples</span></div>
        <div class="stat stat-visits"><span class="stat-num" id="statVisitsNum">${currentVisits}</span><span class="stat-label">Total Visits</span></div>
      </div>
    </div>
  `;

  // Hide nav footer on welcome screen
  if (DOM.topicNavFooter) DOM.topicNavFooter.style.display = 'none';

  // Wire up start reading and continue buttons
  const startBtn = document.getElementById('startReadingBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (ALL_TOPICS.length > 0) navigateToTopic(ALL_TOPICS[0].id);
    });
  }

  updateContinueUI();

  // Reset Right Panel
  if (DOM.rpChapter) DOM.rpChapter.textContent = 'Welcome & Overview';
  if (DOM.rpToc) {
    DOM.rpToc.innerHTML = `
      <li onclick="window.scrollTo({top:0, behavior:'smooth'})">Overview</li>
      <li onclick="document.getElementById('welcomeVisitorBadge')?.scrollIntoView({behavior:'smooth'})">Live View Counter</li>
      <li onclick="document.querySelector('.welcome-stats')?.scrollIntoView({behavior:'smooth'})">Book Stats</li>
    `;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToTopic(topicId) {
  const topic = TOPIC_MAP.get(topicId);
  if (!topic) return;

  // Update hash
  history.pushState(null, '', `#${topic.id}`);
  renderTopicContent(topic);
}

window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && TOPIC_MAP.has(hash)) {
    renderTopicContent(TOPIC_MAP.get(hash));
  } else {
    showWelcomeScreen();
  }
});

// --- SIDEBAR DRAWER (Mobile) ---
function openMobileSidebar() {
  if (DOM.sidebar) DOM.sidebar.classList.add('open');
  if (DOM.sidebarOverlay) DOM.sidebarOverlay.classList.add('visible');
}

function closeMobileSidebar() {
  if (DOM.sidebar) DOM.sidebar.classList.remove('open');
  if (DOM.sidebarOverlay) DOM.sidebarOverlay.classList.remove('visible');
}

if (DOM.sidebarToggle) {
  DOM.sidebarToggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      if (DOM.sidebar.classList.contains('open')) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    } else {
      DOM.layout.classList.toggle('sidebar-hidden');
    }
  });
}

if (DOM.sidebarOverlay) {
  DOM.sidebarOverlay.addEventListener('click', closeMobileSidebar);
}

// --- FULLSCREEN & PRINT ---
if (DOM.fullscreenBtn) {
  DOM.fullscreenBtn.addEventListener('click', () => {
    document.body.classList.toggle('fullscreen-mode');
    if (document.body.classList.contains('fullscreen-mode')) {
      showToast('Fullscreen mode on. Press Esc to exit.', 'info');
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('fullscreen-mode')) {
    document.body.classList.remove('fullscreen-mode');
  }
});

if (DOM.printBtn) {
  DOM.printBtn.addEventListener('click', () => {
    window.print();
  });
}

// --- SCROLL TO TOP ---
window.addEventListener('scroll', () => {
  if (DOM.scrollTop) {
    if (window.scrollY > 300) {
      DOM.scrollTop.classList.add('visible');
    } else {
      DOM.scrollTop.classList.remove('visible');
    }
  }
});

if (DOM.scrollTop) {
  DOM.scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- WELCOME SCREEN ACTIONS ---
if (DOM.startReadingBtn) {
  DOM.startReadingBtn.addEventListener('click', () => {
    navigateToTopic(ALL_TOPICS[0].id);
  });
}

// --- TEXT FORMATTING HELPERS ---
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
}

function formatText(text) {
  if (!text) return '';
  let formatted = escapeHTML(text);
  // Highlight inline quotes and functions
  formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
  formatted = formatted.replace(/(\b(?:int|float|str|bool|list|tuple|set|dict|ord|chr|len|range|print|input)\(\))/g, '<code>$1</code>');
  formatted = formatted.replace(/(\b(?:True|False|None)\b)/g, '<span class="kw">$1</span>');
  return formatted;
}

function formatParagraphs(text) {
  if (!text) return '';
  const lines = text.split('\n');
  return lines.map(line => {
    line = line.trim();
    if (!line) return '';
    if (line.startsWith('- ') || line.startsWith('• ')) {
      return `<div style="padding-left:16px; margin-bottom:4px; position:relative;"><span style="position:absolute; left:0; color:var(--green);">▸</span>${formatText(line.substring(2))}</div>`;
    }
    return `<p style="margin-bottom:12px; line-height:1.75;">${formatText(line)}</p>`;
  }).join('');
}

// --- INITIALIZATION ---
function init() {
  initTheme();
  initViewCounter();
  initAuth();
  renderSidebar();
  updateBookmarkUI();
  updateProgressUI();
  updateContinueUI();
  renderRecents();

  // Route by URL Hash
  const hash = window.location.hash.replace('#', '');
  if (hash && TOPIC_MAP.has(hash)) {
    renderTopicContent(TOPIC_MAP.get(hash));
  } else {
    showWelcomeScreen();
  }

  // Hook Header Brand to Return Home
  const brandHome = document.getElementById('brandHome');
  if (brandHome) {
    brandHome.addEventListener('click', () => showWelcomeScreen());
  }

  // Hook Theme Toggle Button
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

// Launch on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
