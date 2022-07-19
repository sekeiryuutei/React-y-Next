import React, { Component } from 'react';
import ContentWrapper from '@/components/Layout/ContentWrapper';

import FormWizardValidation from './wizard.validation.js';
import FormWizardVertical from './wizard.vertical.js';

class FormWizard extends Component {
    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>
                        Form Wizard
                        <small>Native form wizard with validation powered by Reactstrap</small>
                    </div>
                </div>

                <FormWizardValidation />

                <FormWizardVertical />
            </ContentWrapper>
        );
    }
}

export default FormWizard;
