/* CSS Content */
* {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            color: #333;
        }
        
        .container {
            background-color: white;
            border-radius: 16px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 480px;
            padding: 35px;
            transition: transform 0.3s ease;
        }
        
        .container:hover {
            transform: translateY(-5px);
        }
        
        h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #2d3748;
            font-weight: 700;
            font-size: 28px;
            position: relative;
            padding-bottom: 15px;
        }
        
        h2:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background: linear-gradient(to right, #6a11cb, #2575fc);
            border-radius: 2px;
        }
        
        .input-group {
            position: relative;
            margin-bottom: 30px;
        }
        
        .password-input {
            width: 100%;
            padding: 16px 50px 16px 20px;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 17px;
            transition: all 0.3s;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        
        .password-input:focus {
            outline: none;
            border-color: #4299e1;
            box-shadow: 0 0 0 4px rgba(66, 153, 225, 0.2);
        }
        
        .toggle-visibility {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            color: #718096;
            font-size: 20px;
            transition: color 0.3s;
        }
        
        .toggle-visibility:hover {
            color: #4299e1;
        }
        
        .strength-meter {
            height: 12px;
            width: 100%;
            background-color: #e2e8f0;
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 25px;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .strength-bar {
            height: 100%;
            width: 0%;
            border-radius: 6px;
            transition: all 0.4s ease;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        .strength-labels {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
        }
        
        .strength-label {
            font-size: 14px;
            color: #718096;
            font-weight: 500;
        }
        
        .strength-value {
            font-weight: 700;
            font-size: 18px;
            text-align: center;
            margin-bottom: 20px;
            height: 26px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .criteria-list {
            margin-top: 25px;
            background: #f8fafc;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        
        .criteria-title {
            font-weight: 600;
            margin-bottom: 15px;
            color: #2d3748;
            font-size: 17px;
            display: flex;
            align-items: center;
        }
        
        .criteria-title i {
            margin-right: 10px;
            color: #4299e1;
        }
        
        .criterion {
            display: flex;
            align-items: center;
            margin-bottom: 14px;
            font-size: 15px;
            color: #4a5568;
        }
        
        .criterion i {
            margin-right: 12px;
            font-size: 18px;
            width: 24px;
            text-align: center;
        }
        
        .feedback {
            margin-top: 25px;
            padding: 20px;
            border-radius: 10px;
            font-size: 15px;
            display: none;
            line-height: 1.5;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .weak-feedback {
            background-color: #fed7d7;
            color: #c53030;
            border-left: 5px solid #c53030;
        }
        
        .medium-feedback {
            background-color: #feebcb;
            color: #b7791f;
            border-left: 5px solid #b7791f;
        }
        
        .strong-feedback {
            background-color: #c6f6d5;
            color: #2f855a;
            border-left: 5px solid #2f855a;
        }
        
        .password-tips {
            margin-top: 25px;
            padding: 20px;
            background: #edf2f7;
            border-radius: 10px;
            font-size: 14px;
            color: #4a5568;
        }
        
        .password-tips h3 {
            margin-bottom: 12px;
            color: #2d3748;
            display: flex;
            align-items: center;
        }
        
        .password-tips h3 i {
            margin-right: 10px;
            color: #4299e1;
        }
        
        .password-tips ul {
            padding-left: 20px;
        }
        
        .password-tips li {
            margin-bottom: 8px;
            line-height: 1.5;
        }
        
        @media (max-width: 500px) {
            .container {
                padding: 25px;
            }
            
            h2 {
                font-size: 24px;
            }
            
            .password-input {
                padding: 14px 45px 14px 15px;
            }
        }
