import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import {
  Title,
  DivMessage,
  Container,
  InputContainer,
  Box,
  Icon,
  Text,
} from "./styled";

const PasswordValidatorComponent = ({ options }) => {
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState([]);

  useEffect(() => {
    const messages = [];

    const addMessage = (text, isMet) => {
      messages.push({
        text,
        icon: isMet ? (
          <CheckIcon data-testid={`CheckIcon-${text}`} />
        ) : (
          <CloseIcon data-testid={`CloseIcon-${text}`} />
        ),
      });
    };

    if (options.includes("digit")) {
      addMessage("Has a number 0-9", /\d/.test(password));
    }

    if (options.includes("specialCharacters")) {
      addMessage(
        "Has special characters: !@#$%^&*",
        /[!@#$%^&*]/.test(password)
      );
    }

    if (options.includes("uppercase")) {
      addMessage("Has uppercase Letter", /[A-Z]/.test(password));
    }

    setValidationMessage(messages);
  }, [password, options]);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  return (
    <>
      <Title>Password Component</Title>
      <Container>
        {validationMessage.length > 0 && (
          <Box>
            <InputContainer>
              <input
                type="text"
                value={password}
                onChange={handlePasswordChange}
              />
            </InputContainer>
            <div>
              {validationMessage.map((message, index) => (
                <DivMessage style={{ display: "flex" }} key={index}>
                  <Icon
                    style={{
                      backgroundColor:
                        message.icon.type === CheckIcon ? "green" : "red",
                    }}
                    data-testid={`spanIcon-${message.text}`}
                  >
                    {message.icon}
                  </Icon>
                  <Text>{message.text}</Text>
                </DivMessage>
              ))}
            </div>
          </Box>
        )}
      </Container>
    </>
  );
};

export default PasswordValidatorComponent;
