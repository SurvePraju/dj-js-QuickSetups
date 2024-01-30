
var count = 1;
var blogElement = document.querySelector(".blog-content");
const hideFirst = function () {
    const firstEle = document.querySelector(".starting-template");
    if (firstEle) {
        firstEle.classList.add("starting-template-hide");
    }
}
const addParagraph = function () {
    hideFirst();
    if (!blogElement.querySelector("input")) {
        // Create a new text box element
        var textBox = document.createElement("input");

        // Set the type attribute to "text" for a text box
        textBox.setAttribute("type", "text");
        textBox.setAttribute("placeholder", "Enter the Paragraph");

        // You can set other attributes or properties as needed
        textBox.setAttribute("id", "newTextBox");
        textBox.setAttribute("name", "input-" + count);
        textBox.setAttribute("class", "text-paragraph");
        // Select the element with the class "blog"


        // Append the new text box to the selected element
        if (blogElement) {
            blogElement.appendChild(textBox);
            count++;
            console.log(count);
            textBox.focus()
        } else {
            console.log("Element with class 'blog' not found.");
        }
    }
    else {
        blogElement.removeChild(blogElement.lastElementChild);
        count--;
        console.log(count);
        addParagraph();
    }
}
const addTitle = function () {
    hideFirst();
    if (!blogElement.querySelector("input")) {
        // Create a new text box element
        var textBox = document.createElement("input");

        // Set the type attribute to "text" for a text box
        textBox.setAttribute("type", "text");
        textBox.setAttribute("placeholder", "Enter the Title");

        // You can set other attributes or properties as needed
        textBox.setAttribute("id", "newTextBox");
        textBox.setAttribute("name", "input-" + count);
        textBox.setAttribute("class", "text-title");
        // Select the element with the class "blog"


        // Append the new text box to the selected element
        if (blogElement) {
            blogElement.appendChild(textBox);
            count++;
            console.log(count);
            textBox.focus()
        } else {
            console.log("Element with class 'blog' not found.");
        }
    }
    else {
        blogElement.removeChild(blogElement.lastElementChild);
        count--;
        console.log(count);
        addTitle();
    }
}
const addImage = function () {
    hideFirst();
    if (!blogElement.querySelector("input")) {
        // Create a new text box element
        var textBox = document.createElement("input");

        // Set the type attribute to "text" for a text box
        textBox.setAttribute("type", "file");
        textBox.setAttribute("placeholder", "Enter the Paragraph");
        // You can set other attributes or properties as needed
        textBox.setAttribute("id", "newImageBox");
        textBox.setAttribute("name", "input-" + count);
        textBox.setAttribute("class", "blog-image");
        // Select the element with the class "blog"


        // Append the new text box to the selected element
        if (blogElement) {
            blogElement.appendChild(textBox);
            count++;
            console.log(count);
            textBox.focus()
        } else {
            console.log("Element with class 'blog' not found.");
        }
    }
    else {
        blogElement.removeChild(blogElement.lastElementChild);
        count--;
        console.log(count);
        addImage();
    }
}

const addCode = function () {
    hideFirst();
    if (!blogElement.querySelector("input")) {
        // Create a new text box element
        var textBox = document.createElement("input");

        // Set the type attribute to "text" for a text box
        textBox.setAttribute("type", "text");
        textBox.setAttribute("placeholder", "Enter or Paste the Code");
        // You can set other attributes or properties as needed
        textBox.setAttribute("id", "newCodeeBox");
        textBox.setAttribute("name", "input-" + count);
        textBox.setAttribute("class", "text-code");
        // Select the element with the class "blog"


        // Append the new text box to the selected element
        if (blogElement) {
            blogElement.appendChild(textBox);
            count++;
            console.log(count);
            textBox.focus()
        } else {
            console.log("Element with class 'blog' not found.");
        }
    }
    else {
        blogElement.removeChild(blogElement.lastElementChild);
        count--;
        console.log(count);
        addCode();
    }
}


const saveInput = function () {
    const inputData = document.querySelector(".blog-content input");
    const inputClass = inputData.getAttribute("class");
    const inputValue = inputData.value;

    if (inputValue !== "") {
        switch (inputClass) {
            case "text-title":
                var newELement = document.createElement("div");
                newELement.setAttribute("class", "blog-title");
                break;
            case "text-paragraph":
                var newELement = document.createElement("p");
                newELement.setAttribute("class", "blog-paragraph");
                break;
            case "text-code":
                var newELement = document.createElement("p");
                newELement.setAttribute("class", "blog-code");
                break;
        }
        blogElement.removeChild(blogElement.lastElementChild);
        blogElement.appendChild(newELement);
        newELement.innerHTML = inputValue;

    } else {
        console.log("No data was entered");
    }
};



function postAll() {
    var exists = false;
    const inputContent = blogElement.innerHTML;
    var blogTitleList = document.querySelectorAll(".blog-item a");
    const blogTitle = blogElement.querySelector(".blog-title");

    for (var i = 0; i < blogTitleList.length; i++) {
        var blogTitleIteration = blogTitleList[i].innerHTML.split("\n")[0].trim();
        if (blogTitleIteration === blogTitle.innerHTML.trim()) {
            exists = true;
            break;
        }
    }

    if (!exists) {
        const inputContentField = document.getElementById('inputContent');
        inputContentField.value = inputContent;
        document.getElementById('save-html-form').submit();
    }
    else {
        document.querySelector(".modal").style.display = "flex";

    }
}



