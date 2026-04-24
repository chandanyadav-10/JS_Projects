class User {
  static userCount = 0;

  constructor(username, password) {
    this.username = username;
    this._password = password;
    User.userCount++;
  }

  get password() {
    return "********";
  }

  set password(newPass) {
    if (newPass.length < 6) {
      showOutput("❌ Password too short!");
    } else {
      this._password = newPass;
      showOutput("✅ Password updated!");
    }
  }

  login(pass) {
    if (pass === this._password) {
      showOutput("✅ " + this.username + " logged in");
    } else {
      showOutput("❌ Wrong password");
    }
  }

  static totalUsers() {
    showOutput("👥 Total users: " + User.userCount);
  }
}

let currentUser = null;

function showOutput(msg) {
  document.getElementById("output").innerText = msg;
}

function createUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!username || !password) {
    showOutput("⚠️ Enter username & password");
    return;
  }

  currentUser = new User(username, password);
  showOutput("🎉 User created: " + username);
}

function loginUser() {
  if (!currentUser) {
    showOutput("⚠️ Create user first");
    return;
  }

  let password = document.getElementById("password").value;
  currentUser.login(password);
}

function updatePassword() {
  if (!currentUser) {
    showOutput("⚠️ Create user first");
    return;
  }

  let newPass = document.getElementById("password").value;
  currentUser.password = newPass; // setter triggered
}

function showUsers() {
  User.totalUsers(); // static method
}

function showPassword() {
    showOutput("Current Password " +  currentUser.password)   
}
