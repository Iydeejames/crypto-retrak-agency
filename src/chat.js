document.getElementById("send-btn").addEventListener("click", async () => {
     const userInput = document.getElementById("user-input").value;
     const response = await fetch("/chat", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ question: userInput }),
     });
     const data = await response.json();
     document.getElementById("chat-output").innerText += `\nYou: ${userInput}\nBot: ${data.answer}`;
   });
   