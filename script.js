function runScan() {
  const demoData = {
    email: "student@example.com",
    cyberScore: 63,
    breaches: [
      { site: "LinkedIn", year: 2012, data: "Email, Password", action: "Change password" },
      { site: "Zoom", year: 2020, data: "Email", action: "Secure account" }
    ],
    checklist: [
      { task: "Enable 2FA", completed: false },
      { task: "Change 2 leaked passwords", completed: true },
      { task: "Remove DOB from Facebook", completed: false }
    ]
  };

  document.getElementById('results').style.display = 'block';
  document.getElementById('score').textContent = demoData.cyberScore;

  const breachDiv = document.querySelector('.breaches');
  breachDiv.innerHTML = "<h3>🔐 Breaches Found:</h3>";
  demoData.breaches.forEach(breach => {
    breachDiv.innerHTML += `<p><strong>${breach.site} (${breach.year})</strong><br>
    Data: ${breach.data}<br>
    ➤ <em>${breach.action}</em></p>`;
  });

  const checklistUl = document.getElementById('checklist');
  checklistUl.innerHTML = '';
  demoData.checklist.forEach(item => {
    const li = document.createElement('li');
    li.textContent = (item.completed ? '✅ ' : '🟡 ') + item.task;
    checklistUl.appendChild(li);
  });
}