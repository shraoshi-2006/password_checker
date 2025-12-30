    // JavaScript Content
        const passwordInput = document.getElementById('password');
        const strengthBar = document.getElementById('strength-bar');
        const strengthValue = document.getElementById('strength-value');
        const feedback = document.getElementById('feedback');
        const toggleVisibility = document.getElementById('toggleVisibility');
        
        // Criteria elements
        const lengthCriterion = document.getElementById('length-criterion');
        const uppercaseCriterion = document.getElementById('uppercase-criterion');
        const lowercaseCriterion = document.getElementById('lowercase-criterion');
        const numberCriterion = document.getElementById('number-criterion');
        const specialCriterion = document.getElementById('special-criterion');
        
        // Icons for criteria
        const criteriaIcons = {
            length: lengthCriterion.querySelector('i'),
            uppercase: uppercaseCriterion.querySelector('i'),
            lowercase: lowercaseCriterion.querySelector('i'),
            number: numberCriterion.querySelector('i'),
            special: specialCriterion.querySelector('i')
        };
        
        // Toggle password visibility
        let isPasswordVisible = false;
        toggleVisibility.addEventListener('click', () => {
            isPasswordVisible = !isPasswordVisible;
            passwordInput.type = isPasswordVisible ? 'text' : 'password';
            toggleVisibility.innerHTML = isPasswordVisible ? 
                '<i class="fas fa-eye-slash"></i>' : 
                '<i class="fas fa-eye"></i>';
        });
        
        passwordInput.addEventListener('input', checkPasswordStrength);
        
        function checkPasswordStrength() {
            const password = passwordInput.value;
            
            // Reset criteria icons
            Object.values(criteriaIcons).forEach(icon => {
                icon.className = 'fas fa-times-circle';
                icon.style.color = '#e53e3e';
            });
            
            // Check each criterion
            let score = 0;
            const hasMinLength = password.length >= 8;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumbers = /[0-9]/.test(password);
            const hasSpecial = /[@$!%*?&]/.test(password);
            
            // Update criteria UI
            if (hasMinLength) {
                score++;
                criteriaIcons.length.className = 'fas fa-check-circle';
                criteriaIcons.length.style.color = '#38a169';
            }
            
            if (hasUpperCase) {
                score++;
                criteriaIcons.uppercase.className = 'fas fa-check-circle';
                criteriaIcons.uppercase.style.color = '#38a169';
            }
            
            if (hasLowerCase) {
                score++;
                criteriaIcons.lowercase.className = 'fas fa-check-circle';
                criteriaIcons.lowercase.style.color = '#38a169';
            }
            
            if (hasNumbers) {
                score++;
                criteriaIcons.number.className = 'fas fa-check-circle';
                criteriaIcons.number.style.color = '#38a169';
            }
            
            if (hasSpecial) {
                score++;
                criteriaIcons.special.className = 'fas fa-check-circle';
                criteriaIcons.special.style.color = '#38a169';
            }
            
            // Additional points for length beyond 12 characters
            if (password.length > 12) score++;
            
            // Calculate strength percentage (0-100)
            const strengthPercentage = Math.min(100, (score / 7) * 100);
            
            // Update strength bar and text
            strengthBar.style.width = `${strengthPercentage}%`;
            
            // Determine strength level and set colors
            let strengthLevel, barColor, feedbackText, feedbackClass;
            
            if (strengthPercentage < 40) {
                strengthLevel = "Weak";
                barColor = "#e53e3e";
                feedbackText = "Your password is weak and easily guessable. Try adding more character types and increasing the length to at least 12 characters.";
                feedbackClass = "weak-feedback";
            } else if (strengthPercentage < 80) {
                strengthLevel = "Medium";
                barColor = "#dd6b20";
                feedbackText = "Your password is okay but could be stronger. Add more character types or increase the length to make it more secure.";
                feedbackClass = "medium-feedback";
            } else {
                strengthLevel = "Strong";
                barColor = "#38a169";
                feedbackText = "Excellent! Your password is strong and secure. It would be very difficult for someone to guess or crack this password.";
                feedbackClass = "strong-feedback";
            }
            
            strengthBar.style.backgroundColor = barColor;
            strengthValue.textContent = strengthLevel;
            strengthValue.style.color = barColor;
            
            // Show feedback
            feedback.textContent = feedbackText;
            feedback.className = "feedback " + feedbackClass;
            feedback.style.display = "block";
            
            // Hide feedback if password is empty
            if (password.length === 0) {
                strengthValue.textContent = "";
                feedback.style.display = "none";
                strengthBar.style.width = "0%";
                
                // Reset criteria icons
                Object.values(criteriaIcons).forEach(icon => {
                    icon.className = 'fas fa-times-circle';
                    icon.style.color = '#e53e3e';
                });
            }
        }
        
        // Focus the password input on page load
        window.addEventListener('load', () => {
            passwordInput.focus();
        });
       
