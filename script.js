const display = document.getElementById("display");
const buttons = document.querySelectorAll(".key");
let currentExpression = "";
let shouldReset = false;

function updateDisplay() {
  display.textContent = currentExpression || "0";
}

function appendValue(value) {
  if (shouldReset && /[0-9.]/.test(value)) {
    currentExpression = "";
    shouldReset = false;
  }

  if (currentExpression === "0" && value !== ".") {
    currentExpression = value;
  } else {
    currentExpression += value;
  }

  updateDisplay();
}

function clearExpression() {
  currentExpression = "";
  shouldReset = false;
  updateDisplay();
}

function deleteLastChar() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

function applyPercent() {
  try {
    const clean = sanitizeExpression(currentExpression);
    const value = new Function(`return ${clean}`)();
    currentExpression = String(value / 100);
  } catch {
    currentExpression = "Error";
  }
  shouldReset = true;
  updateDisplay();
}

function calculate() {
  try {
    const clean = sanitizeExpression(currentExpression);
    const result = new Function(`return ${clean}`)();
    currentExpression = String(result);
  } catch {
    currentExpression = "Error";
  }
  shouldReset = true;
  updateDisplay();
}

function sanitizeExpression(expression) {
  return expression.replace(/[^0-9.+\-*/()%]/g, "");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
      clearExpression();
      return;
    }

    if (action === "delete") {
      deleteLastChar();
      return;
    }

    if (action === "percent") {
      applyPercent();
      return;
    }

    if (action === "calculate") {
      calculate();
      return;
    }

    appendValue(value);
  });
});
