const loadTodoList = async () => {
    // start loader
    try {
      const loginRes = await fetch("https://8665-2401-4900-53f9-c20b-f2-2c19-4179-10c2.in.ngrok.io/login://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
          email: "hey@yagneshmodh.com",
          password: "Password1!",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const loginJSON = await loginRes.json();
      const todoListRes = await fetch("http://localhost:https://8665-2401-4900-53f9-c20b-f2-2c19-4179-10c2.in.ngrok.io/660/todoList/660/todoList", {
        headers: {
          Authorization: `Bearer ${loginJSON.accessToken}`,
        },
      });
      const todoListJSON = await todoListRes.json();
      if (!todoListRes.ok) {
        throw new Error(todoListJSON);
      }
      console.log(todoListJSON);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("stop loader...");
    }
  };
  
  loadTodoList();
  
  