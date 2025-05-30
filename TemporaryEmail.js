<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temporary Email - Disposable Email Service</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            color: white;
            margin-bottom: 30px;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .email-generator {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            margin-bottom: 30px;
        }

        .email-display {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .email-input {
            flex: 1;
            min-width: 300px;
            padding: 15px;
            border: 2px solid #e1e5e9;
            border-radius: 8px;
            font-size: 1.1rem;
            background-color: #f8f9fa;
        }

        .btn {
            padding: 15px 25px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
        }

        .btn-secondary:hover {
            background: #5a6268;
            transform: translateY(-2px);
        }

        .btn-success {
            background: #28a745;
            color: white;
        }

        .btn-success:hover {
            background: #218838;
        }

        .email-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .info-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border-left: 4px solid #667eea;
        }

        .info-card h3 {
            color: #333;
            margin-bottom: 10px;
        }

        .info-card p {
            color: #666;
            font-size: 0.9rem;
        }

        .inbox {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .inbox-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            flex-wrap: wrap;
            gap: 15px;
        }

        .inbox-header h2 {
            color: #333;
            font-size: 1.8rem;
        }

        .email-list {
            border: 1px solid #e1e5e9;
            border-radius: 10px;
            overflow: hidden;
        }

        .email-item {
            padding: 20px;
            border-bottom: 1px solid #e1e5e9;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .email-item:hover {
            background-color: #f8f9fa;
        }

        .email-item:last-child {
            border-bottom: none;
        }

        .email-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 10px;
            flex-wrap: wrap;
            gap: 10px;
        }

        .email-sender {
            font-weight: 600;
            color: #333;
        }

        .email-time {
            color: #666;
            font-size: 0.9rem;
        }

        .email-subject {
            font-weight: 600;
            color: #667eea;
            margin-bottom: 8px;
        }

        .email-preview {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.4;
        }

        .empty-inbox {
            text-align: center;
            padding: 60px 20px;
            color: #666;
        }

        .empty-inbox svg {
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
            opacity: 0.5;
        }

        .timer {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 15px;
            margin-top: 20px;
            text-align: center;
        }

        .timer-text {
            color: #856404;
            font-weight: 600;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .feature-card {
            background: white;
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
        }

        .feature-icon {
            width: 50px;
            height: 50px;
            margin: 0 auto 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .email-display {
                flex-direction: column;
            }
            
            .email-input {
                min-width: 100%;
            }
            
            .inbox-header {
                flex-direction: column;
                text-align: center;
            }
        }

        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            z-index: 1000;
        }

        .notification.show {
            transform: translateX(0);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Temporary Email</h1>
            <p>Get a disposable email address that expires automatically. Perfect for signups, downloads, and protecting your privacy.</p>
        </div>

        <div class="email-generator">
            <div class="email-display">
                <input type="text" id="tempEmail" class="email-input" readonly placeholder="Click 'Generate' to create a temporary email">
                <button class="btn btn-primary" onclick="generateEmail()">Generate New Email</button>
                <button class="btn btn-secondary" onclick="copyEmail()">Copy Email</button>
                <button class="btn btn-success" onclick="refreshInbox()">Refresh Inbox</button>
            </div>

            <div class="email-info">
                <div class="info-card">
                    <h3>⏰ Auto Expires</h3>
                    <p>Your email will automatically expire in 1 hour</p>
                </div>
                <div class="info-card">
                    <h3>🔒 Privacy Protected</h3>
                    <p>No registration required, completely anonymous</p>
                </div>
                <div class="info-card">
                    <h3>📧 Instant Delivery</h3>
                    <p>Receive emails immediately in your temporary inbox</p>
                </div>
                <div class="info-card">
                    <h3>🗑️ Auto Delete</h3>
                    <p>All emails are automatically deleted after expiration</p>
                </div>
            </div>

            <div class="timer" id="timer" style="display: none;">
                <div class="timer-text">Email expires in: <span id="countdown">60:00</span></div>
            </div>
        </div>

        <div class="inbox">
            <div class="inbox-header">
                <h2>📥 Inbox</h2>
                <div>
                    <span id="emailCount">0 emails</span>
                </div>
            </div>

            <div class="email-list" id="emailList">
                <div class="empty-inbox">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <h3>No emails yet</h3>
                    <p>Generate a temporary email address above to start receiving emails</p>
                </div>
            </div>
        </div>

        <div class="features">
            <div class="feature-card">
                <div class="feature-icon">🛡️</div>
                <h3>Spam Protection</h3>
                <p>Keep your real email safe from spam and unwanted messages</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Instant Setup</h3>
                <p>No registration required. Get your temporary email in seconds</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔄</div>
                <h3>Multiple Emails</h3>
                <p>Generate as many temporary emails as you need</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3>Mobile Friendly</h3>
                <p>Works perfectly on all devices and screen sizes</p>
            </div>
        </div>
    </div>

    <div class="notification" id="notification">
        Email copied to clipboard!
    </div>

    <script>
        let currentEmail = '';
        let emails = [];
        let countdownTimer;
        let timeLeft = 3600; // 1 hour in seconds

        // Generate random email
        function generateEmail() {
            const domains = ['tempmail.com', 'disposable.email', 'temp-email.org', '10minutemail.com'];
            const randomString = Math.random().toString(36).substring(2, 12);
            const randomDomain = domains[Math.floor(Math.random() * domains.length)];
            currentEmail = `${randomString}@${randomDomain}`;
            
            document.getElementById('tempEmail').value = currentEmail;
            document.getElementById('timer').style.display = 'block';
            
            // Reset timer
            timeLeft = 3600;
            startCountdown();
            
            // Clear previous emails
            emails = [];
            updateEmailList();
            
            // Simulate receiving some demo emails after a short delay
            setTimeout(() => {
                addDemoEmails();
            }, 2000);
        }

        // Copy email to clipboard
        function copyEmail() {
            if (!currentEmail) {
                showNotification('Please generate an email first!', 'error');
                return;
            }
            
            navigator.clipboard.writeText(currentEmail).then(() => {
                showNotification('Email copied to clipboard!');
            }).catch(() => {
                // Fallback for older browsers
                const tempInput = document.createElement('input');
                tempInput.value = currentEmail;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                showNotification('Email copied to clipboard!');
            });
        }

        // Show notification
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = `notification ${type}`;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Start countdown timer
        function startCountdown() {
            if (countdownTimer) {
                clearInterval(countdownTimer);
            }
            
            countdownTimer = setInterval(() => {
                timeLeft--;
                
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                
                document.getElementById('countdown').textContent = 
                    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                if (timeLeft <= 0) {
                    clearInterval(countdownTimer);
                    expireEmail();
                }
            }, 1000);
        }

        // Expire email
        function expireEmail() {
            currentEmail = '';
            emails = [];
            document.getElementById('tempEmail').value = '';
            document.getElementById('timer').style.display = 'none';
            updateEmailList();
            showNotification('Email has expired!', 'error');
        }

        // Add demo emails
        function addDemoEmails() {
            const demoEmails = [
                {
                    sender: 'welcome@example.com',
                    subject: 'Welcome to our service!',
                    preview: 'Thank you for signing up. We\'re excited to have you on board...',
                    time: new Date().toLocaleTimeString(),
                    content: 'Welcome to our amazing service! We\'re thrilled to have you join our community.'
                },
                {
                    sender: 'noreply@newsletter.com',
                    subject: 'Your weekly digest',
                    preview: 'Here are the top stories from this week that you might find interesting...',
                    time: new Date(Date.now() - 300000).toLocaleTimeString(),
                    content: 'Here\'s your weekly digest with the most important updates and news.'
                }
            ];
            
            demoEmails.forEach((email, index) => {
                setTimeout(() => {
                    emails.unshift(email);
                    updateEmailList();
                    showNotification(`New email from ${email.sender}`);
                }, index * 1000);
            });
        }

        // Update email list display
        function updateEmailList() {
            const emailList = document.getElementById('emailList');
            const emailCount = document.getElementById('emailCount');
            
            emailCount.textContent = `${emails.length} email${emails.length !== 1 ? 's' : ''}`;
            
            if (emails.length === 0) {
                emailList.innerHTML = `
                    <div class="empty-inbox">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <h3>No emails yet</h3>
                        <p>Generate a temporary email address above to start receiving emails</p>
                    </div>
                `;
            } else {
                emailList.innerHTML = emails.map(email => `
                    <div class="email-item" onclick="openEmail('${email.subject}', '${email.sender}', '${email.content}')">
                        <div class="email-header">
                            <div class="email-sender">${email.sender}</div>
                            <div class="email-time">${email.time}</div>
                        </div>
                        <div class="email-subject">${email.subject}</div>
                        <div class="email-preview">${email.preview}</div>
                    </div>
                `).join('');
            }
        }

        // Open email (simulate email reading)
        function openEmail(subject, sender, content) {
            alert(`From: ${sender}\nSubject: ${subject}\n\n${content}`);
        }

        // Refresh inbox
        function refreshInbox() {
            if (!currentEmail) {
                showNotification('Please generate an email first!', 'error');
                return;
            }
            
            showNotification('Inbox refreshed!');
            
            // Simulate receiving a new email occasionally
            if (Math.random() > 0.7) {
                setTimeout(() => {
                    const newEmail = {
                        sender: 'system@notification.com',
                        subject: 'System notification',
                        preview: 'This is a simulated email for demonstration purposes...',
                        time: new Date().toLocaleTimeString(),
                        content: 'This is a demonstration email to show how the temporary email service works.'
                    };
                    emails.unshift(newEmail);
                    updateEmailList();
                    showNotification(`New email from ${newEmail.sender}`);
                }, 1000);
            }
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Auto-generate an email on page load for demo
            generateEmail();
        });
    </script>
</body>
</html>
