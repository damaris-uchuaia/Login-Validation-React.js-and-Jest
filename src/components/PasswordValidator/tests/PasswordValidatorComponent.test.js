import PasswordValidatorComponent from '../PasswordValidatorComponent';
import {render, screen, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import React from 'react';

describe("PasswordValidatorComponent", () => {
    it('should render PasswordValidatorComponent messages', () => {
        render(<PasswordValidatorComponent options={['specialCharacters', 'digit', 'uppercase']} />);
        
        expect(screen.getByText('Has a number 0-9')).toBeInTheDocument();
        expect(screen.getByText('Has special characters: !@#$%^&*')).toBeInTheDocument();
        expect(screen.getByText('Has uppercase Letter')).toBeInTheDocument();
    });

    it('validates icon background-color that meets all criteria', async () => {
        render(<PasswordValidatorComponent options={['digit', 'specialCharacters', 'uppercase']} />);
      
        const inputElement = screen.getByRole('textbox');
      
        userEvent.type(inputElement, 'StrongPassword123!');
        
        await waitFor(() => {
            expect(screen.getByTestId('spanIcon-Has a number 0-9')).toHaveStyle('background-color: green');
          });
        
          await waitFor(() => {
            expect(screen.getByTestId('spanIcon-Has special characters: !@#$%^&*')).toHaveStyle('background-color: green');
          });
        
          await waitFor(() => {
            expect(screen.getByTestId('spanIcon-Has uppercase Letter')).toHaveStyle('background-color: green');
          });
      });

      it('validates icon background-color without special characters', async () => {
        render(<PasswordValidatorComponent options={['digit', 'specialCharacters', 'uppercase']} />);
      
        const inputElement = screen.getByRole('textbox');
      
        userEvent.type(inputElement, 'Password123');
        
        await waitFor(() => {
          expect(screen.getByTestId('spanIcon-Has a number 0-9')).toHaveStyle('background-color: green');
        });
        await waitFor(() => {
            expect(screen.getByTestId('spanIcon-Has special characters: !@#$%^&*')).toHaveStyle('background-color: red');
        });
        await waitFor(() => {
            expect(screen.getByTestId('spanIcon-Has uppercase Letter')).toHaveStyle('background-color: green');
        });
      });
      
      it('validates icons that meets all criteria', async() => {
        render(<PasswordValidatorComponent options={['digit', 'specialCharacters', 'uppercase']} />);
      
        const inputElement = screen.getByRole('textbox');
      
        userEvent.type(inputElement, 'StrongPassword123!');
      
        await waitFor(() =>{
            expect(screen.getByTestId('CheckIcon-Has a number 0-9')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByTestId('CheckIcon-Has special characters: !@#$%^&*')).toBeInTheDocument();
        })
        await waitFor(() => {
            expect(screen.getByTestId('CheckIcon-Has uppercase Letter')).toBeInTheDocument();
        })
      }); 
      
    it('validates icons without digits and special characters', async () => {
        render(<PasswordValidatorComponent options={['digit', 'specialCharacters', 'uppercase']} />);

        const inputElement = screen.getByRole('textbox');

        userEvent.type(inputElement, 'Password');

        await waitFor(() => {
            expect(screen.getByTestId('CloseIcon-Has a number 0-9')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByTestId('CloseIcon-Has special characters: !@#$%^&*')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByTestId('CheckIcon-Has uppercase Letter')).toBeInTheDocument();
        });

    });    
}) 