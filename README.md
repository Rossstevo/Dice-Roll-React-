# Dice-Roll-React-

# Dice App

This project will involve:
- useState hook
- handling input data
- passing state as props
- using conditional operators to show or hide elements

Don't feel that you have to do every single task; I recommend aiming to do at least tasks 0, 1, and 1.1 done to practice
the concepts we've learned this week.

[Go to the hints at the bottom of the page if you get stuck on the first few tasks!](#hints)

###### Note:
Every time you see 1dN (e.g. 1d6, 1d20), I mean "I have rolled one N-sided die", such as a 6-sided die.

# Task 0

Create a Dice app.

It should have a button. On click, the button will roll a number between 1 and 6.

The number rolled should be displayed below it. Every time the button is clicked, it should add the number
to the output, or log of clicks, in a new p tag going from most recent roll at the top to least recent at the bottom.

![A button that says Roll 1d6 and has a log of the previous rolls beneath it](DiceAppImages/Screenshot%202022-03-02%20at%2013.35.16.png)

## Task 1

Make a Dice/Die component that has a button and takes the number of sides on a die (singular for dice) as a number.

When you click the button, it will calculate a random number; the number must be between 1 and the value of the dice (a roll).

Use this dice component in a parent component (e.g. App).
Every time one of the dice buttons is clicked, add the result to state, and display each result as a p tag on the page (like the screenshot).

![App with buttons representing dice, with numbers underneath the buttons representing rolls](DiceAppImages/Screenshot%202022-03-01%20at%2022.42.36.png)

## Task 1.1

If you haven't already, make the p tags with the rolls their own component (Output or RollLog would be good names).

## Task 2

Make a number input with a button, to add a new value of die.

When the user clicks the button, the Dice App should add another Dice component, that has the number of sides the user put in the input.

If there is no value in the input, do not add a Dice button.

![Same image as above, with a form for adding an additional dice](DiceAppImages/Screenshot%202022-03-02%20at%2011.58.49.png)

## Task 3

When the user has clicked the "Add a die", clear the value in the form, so that the user does not have to backspace to add another value.

## Task 4

If a dice of that value already exists, do not show duplicate buttons.

## Task 5

Add a "Clear log" button at the top of the p tags with the rolls. If there are no rolls, do not show the button.

![Form and buttons as above, with a Clear Log button](DiceAppImages/Screenshot%202022-03-02%20at%2012.00.14.png)

# Hints

## Task 0 Hints

### Rolling the number

Use Math.random() multiplied by the maximum number, to calculate rolls.

```js
Math.ceil(Math.random() * 6)
```

### Displaying multiple rolls

Your rolls should be saved as an array.

```jsx
const [rolls, setRolls] = useState(['1d6: 6', '1d6: 2'])
```

Which you can display by mapping.

```jsx
{rolls.map(roll => <p>{roll}</p>)}
```

## Task 1.1 Hint

Your Dice App should end up with JSX a bit like this:

```jsx
<div>
    <Dice setRolls={addRoll} rolls={rolls} sides={6} />
    <RollLog rolls={rolls} />
</div>
```

Both your Dice App and your Dice will have a state hook.
