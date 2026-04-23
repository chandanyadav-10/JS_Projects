class Passwordgen {
  passwordGenrator() {
    let length = parseInt(document.getElementById("length").value);
    let funnypassword = document.getElementById("funnypassword").checked;
    let weakpassword = document.getElementById("weakpassword").checked;
    let strongpassword = document.getElementById("strongpassword").checked;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const funnyPasswords = [
      "ilovepizza123",
      "password_is_weak",
      "dont_hack_me",
      "iamnotrobot",
      "monkey@123",
      "chai_peelo",
      "coding_is_pain",
      "404brainnotfound",
      "sleep>coding",
      "error_420",
      "bhai_mat_hack_kar",
      "mera_password_mat_dekh",
      "lol12345",
      "admin_ka_boss",
      "chai_biscuit_lover",
      "nind_aa_rhi_hai",
      "bug_fix_kab_hoga",
      "google_kar_lo",
      "arey_yar",
      "timepass_password",
    ];

    let password = "";

    if (funnypassword) {
      let randomIndex = Math.floor(Math.random() * funnyPasswords.length);
      password = funnyPasswords[randomIndex];
    } else if (weakpassword) {
      let chars = upper + lower + numbers;

      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
    } else if (strongpassword) {
      let chars = upper + lower + numbers + symbols;

      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
    } else {
      alert("Please select an option!");
      return;
    }
    document.getElementById("password").value = password;
  }
}

function generatePassword() {
  let passwordGen = new Passwordgen();
  passwordGen.passwordGenrator();
}
