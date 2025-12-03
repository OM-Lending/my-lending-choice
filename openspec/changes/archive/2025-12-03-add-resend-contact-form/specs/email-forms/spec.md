## ADDED Requirements

### Requirement: Contact Form Email Delivery

The system SHALL deliver contact form submissions as email notifications to the configured business email address using the Resend email service.

#### Scenario: Successful contact form submission

- **GIVEN** a user has filled out all required fields (name, email, message)
- **WHEN** the user submits the contact form
- **THEN** the system sends an email to the business team
- **AND** the user sees a success confirmation message

#### Scenario: Missing required contact fields

- **GIVEN** a user has not filled out all required fields
- **WHEN** the user attempts to submit the form
- **THEN** the form validates client-side and prevents submission
- **AND** the user sees validation feedback on the empty required fields

#### Scenario: Contact email delivery failure

- **GIVEN** a user has filled out all required fields
- **WHEN** the email service fails to deliver the message
- **THEN** the user sees an error message
- **AND** the user can retry the submission

### Requirement: Property Valuation Form Email Delivery

The system SHALL deliver property valuation requests as email notifications to the configured business email address using the Resend email service.

#### Scenario: Successful valuation form submission

- **GIVEN** a user has filled out all required fields (address, property type, property status, first name, last name, email)
- **WHEN** the user submits the valuation form
- **THEN** the system sends an email to the business team
- **AND** the user sees a success confirmation message

#### Scenario: Missing required valuation fields

- **GIVEN** a user has not filled out all required fields
- **WHEN** the user attempts to submit the form
- **THEN** the form validates client-side and prevents submission
- **AND** the user sees validation feedback on the empty required fields

#### Scenario: Valuation email delivery failure

- **GIVEN** a user has filled out all required fields
- **WHEN** the email service fails to deliver the message
- **THEN** the user sees an error message
- **AND** the user can retry the submission

### Requirement: Form Spam Protection

The system SHALL include basic spam protection on all forms to prevent automated bot submissions.

#### Scenario: Bot submission detected via honeypot

- **GIVEN** a bot has filled out the hidden honeypot field
- **WHEN** the form is submitted
- **THEN** the system rejects the submission silently (returns success to avoid revealing detection)
- **AND** no email is sent

#### Scenario: Legitimate user submission

- **GIVEN** a legitimate user leaves the honeypot field empty (default)
- **WHEN** the form is submitted with valid data
- **THEN** the system processes the submission normally

### Requirement: Form Rate Limiting

The system SHALL limit form submissions to prevent abuse and stay within email service quotas.

#### Scenario: User within rate limit

- **GIVEN** a user has submitted fewer than 5 forms in the past hour
- **WHEN** the user submits a valid form
- **THEN** the submission is processed normally

#### Scenario: User exceeds rate limit

- **GIVEN** a user has submitted 5 or more forms in the past hour from the same IP
- **WHEN** the user attempts another submission
- **THEN** the system returns HTTP 429 (Too Many Requests)
- **AND** the user sees a message indicating they should try again later
- **AND** no email is sent

### Requirement: Form Loading State

The system SHALL provide visual feedback during form submission on all forms.

#### Scenario: Form submission in progress

- **GIVEN** the user has submitted a form
- **WHEN** the API request is in flight
- **THEN** the submit button shows a loading indicator
- **AND** the form fields are disabled to prevent duplicate submissions

### Requirement: Form Email Content

The system SHALL send notification emails containing all submitted form data in a professional, branded format.

#### Scenario: Contact email content structure

- **GIVEN** a contact form submission with name, email, phone, subject, and message
- **WHEN** the email is generated
- **THEN** the email includes all provided fields
- **AND** the email uses HTML formatting with brand colors
- **AND** the email subject line includes the form subject selection
- **AND** the sender displays as "My Lending Choice Website"

#### Scenario: Valuation email content structure

- **GIVEN** a valuation form submission with property details and contact info
- **WHEN** the email is generated
- **THEN** the email includes property address, type, status, and contact details
- **AND** the email uses HTML formatting with brand colors
- **AND** the email subject line indicates "Property Valuation Request"
- **AND** the sender displays as "My Lending Choice Website"

### Requirement: Valuation Form Field Simplification

The valuation form SHALL NOT include bedrooms and bathrooms fields.

#### Scenario: Valuation form fields

- **GIVEN** a user views the property valuation form
- **WHEN** the form is displayed
- **THEN** the form shows property address, type, status, and contact fields
- **AND** bedrooms and bathrooms fields are not present
