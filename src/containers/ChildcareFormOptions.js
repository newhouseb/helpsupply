/** @jsx jsx */
import { useCallback, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/core';
import { useHistory } from 'react-router-dom';

import { Routes } from 'constants/Routes';
import { routeWithParams } from 'lib/utils/routes';

import Note from 'components/Note';
import { AdditionalFormTitle } from 'components/AdditionalFormTitle';
import FormBuilder from 'components/Form/FormBuilder';
import { formFieldTypes } from 'components/Form/CreateFormFields';
import { StateContext } from 'state/StateProvider';

function ChildcareFormDetails({ id, onSave, request }) {
  const history = useHistory();
  const { t } = useTranslation();

  const { state } = useContext(StateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState({
    childCareCenters: false,
    mutualAid: false,
    enrichmentCenters: false,
    babySitters: false,
    freeOptions: false,
    paymentAbility: '',
    householdRisk: '',
  });

  const handleFieldChange = useCallback(
    (field) => (value) => {
      setFields((fields) => ({
        ...fields,
        [field]: value,
      }));
    },
    [],
  );

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await onSave(fields);
    if (!res) {
      setIsLoading(false);
      return;
    }

    const url =
      state.editServiceUrl ||
      routeWithParams(Routes.SERVICE_ADDITIONAL_INFO, { id });
    history.push(url);
  };

  const fieldData = [
    {
      customOnChange: handleFieldChange('childCareCenters'),
      label: t('service.childcare.what.labels.childCareCenters'),
      name: 'childCareCenters',
      type: formFieldTypes.INPUT_CHECKBOX,
      value: fields.childCareCenters,
    },
    {
      customOnChange: handleFieldChange('mutualAid'),
      label: t('service.childcare.what.labels.mutualAid'),
      name: 'mutualAid',
      type: formFieldTypes.INPUT_CHECKBOX,
      value: fields.mutualAid,
    },
    {
      customOnChange: handleFieldChange('enrichmentCenters'),
      label: t('service.childcare.what.labels.enrichmentCenters'),
      name: 'enrichmentCenters',
      type: formFieldTypes.INPUT_CHECKBOX,
      value: fields.enrichmentCenters,
    },
    {
      customOnChange: handleFieldChange('babySitters'),
      label: t('service.childcare.what.labels.babySitters'),
      name: 'babySitters',
      type: formFieldTypes.INPUT_CHECKBOX,
      value: fields.babySitters,
    },
    {
      customOnChange: handleFieldChange('freeOptions'),
      label: t('service.childcare.what.labels.freeOptions'),
      name: 'freeOptions',
      type: formFieldTypes.INPUT_CHECKBOX,
      value: fields.freeOptions,
    },
    {
      type: formFieldTypes.NODE,
      node: [
        <AdditionalFormTitle.BottomRule key="childcare-options-divider" />,
      ],
    },
    {
      type: formFieldTypes.NODE,
      node: [
        <Note key="childcare-options-note-1">
          {t('service.childcare.what.labels.noteLowCost')}
        </Note>,
      ],
    },
    {
      customOnChange: handleFieldChange('paymentAbility'),
      isRequired: false,
      label: t('service.childcare.what.labels.paymentAbility'),
      name: 'paymentAbility',
      type: formFieldTypes.INPUT_TEXT,
      value: fields.paymentAbility,
    },
    {
      type: formFieldTypes.NODE,
      node: [
        <Note key="childcare-options-note-1">
          {t('service.childcare.what.labels.noteRisk')}
        </Note>,
      ],
    },
    {
      customOnChange: handleFieldChange('householdRisk'),
      label: t('service.childcare.what.labels.householdRisk'),
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
      name: 'householdRisk',
      type: formFieldTypes.INPUT_DROPDOWN,
      value: fields.householdRisk,
    },
    {
      type: formFieldTypes.NODE,
      node: [
        <Note key="childcare-options-note-1">
          {t('service.childcare.what.labels.noteShare')}
        </Note>,
      ],
    },
  ];

  const {
    childCareCenters,
    mutualAid,
    enrichmentCenters,
    babySitters,
    freeOptions,
    paymentAbility,
    ...requiredFields
  } = fields;

  return (
    <div>
      <FormBuilder
        defaultValues={fields}
        onSubmit={handleSubmit}
        title={t('service.childcare.what.title')}
        description={t('service.childcare.what.description')}
        disabled={!Object.keys(requiredFields).every((key) => !!fields[key])}
        fields={fieldData}
        isLoading={isLoading}
      />
    </div>
  );
}

export default ChildcareFormDetails;
