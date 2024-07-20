# Cron Expression Generator

A user-friendly tool for creating and understanding cron expressions.

## Purpose

This tool simplifies the process of generating valid cron expressions and helps users understand their meaning. It's designed to be easy to use, even for those who are not familiar with cron syntax.

## Features

* Interactive input fields for each part of a cron expression.
* Convenient dropdown menus for common cron patterns.
* Validation to catch errors.
* Provide a clear explanation of the generated cron expression.
  
![Input Fields](https://github.com/user-attachments/assets/a55c280f-c441-4068-86be-625063f5ad84)

![Invalid expression](https://github.com/user-attachments/assets/0227dfdc-c20a-4b13-a5f5-7deaa8ea991d)

![expression generated](https://github.com/user-attachments/assets/ebfc9648-f87a-4d20-9dbe-579b8f479dfa)

## How to Use

1. **Input Values:** Enter the desired values for minutes, hours, day of month, month, and day of week.
2. **Select Patterns (Optional):** Choose common patterns from the dropdowns (e.g., *, -, /).
3. **Generate:** Click the "Generate Cron Expression" button.
4. **View and Copy:** The valid cron expression will be displayed, along with a human-readable explanation. You can copy the expression using the copy icon.
   
![description](https://github.com/user-attachments/assets/9305fd72-23bc-4266-b729-e210e01207f3)

## Examples

* **Every minute:** `* * * * *`
* **Every day at midnight:** `0 0 * * *`
* **Every Monday at 9 AM:** `0 9 * * 1`
* **Every 15 minutes:** `*/15 * * * *`
