/** @jsx jsx */
import { Fragment, useContext } from 'react';
import { jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { StateContext, actions } from 'state/StateProvider';
import { Routes } from 'constants/Routes';
import { routeWithParams } from 'lib/utils/routes';
import { capitalize } from 'lib/utils/strings';

import Text from 'components/Text';
import { TEXT_TYPE } from 'components/Text/constants';
import SubRow from 'components/Confirmation/SubRow';

import { styles } from './ServiceReview.styles';

export const ChildcareServiceReview = ({ id, service }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const { setState } = useContext(StateContext);

  const {
    additionalInfo,
    afternoons,
    children,
    evenings,
    fridays,
    kind,
    mondays,
    mornings,
    night,
    recurring,
    saturdays,
    sundays,
    thursdays,
    timeVaries,
    tuesdays,
    urgency,
    varies,
    wednesdays,
  } = service;

  const handleRedirectIntent = () => {
    const url = routeWithParams(Routes.SERVICE_REVIEW, { id });
    setState({ type: actions.EDIT_SERVICE_REDIRECT, editServiceUrl: url });
  };

  const handleChangeService = () => {
    handleRedirectIntent();
    history.push(
      routeWithParams(Routes.SERVICE_TYPE, {
        id,
      }),
    );
  };

  const handleChangeTime = () => {
    handleRedirectIntent();
    history.push(
      routeWithParams(Routes.SERVICE_CHILDCARE_WHEN, {
        id,
      }),
    );
  };

  const handleChangeDetails = () => {
    handleRedirectIntent();
    history.push(
      routeWithParams(Routes.SERVICE_CHILDCARE_DETAILS, {
        id,
      }),
    );
  };

  const handleChangeAdditionalInfo = () => {
    handleRedirectIntent();
    history.push(
      routeWithParams(Routes.SERVICE_ADDITIONAL_INFO, {
        id,
      }),
    );
  };

  const serviceDetails = (
    <Fragment>
      <Text type={TEXT_TYPE.BODY_3} as="p" css={styles.capitalize}>
        {kind}
      </Text>
      <Text type={TEXT_TYPE.BODY_3} as="p" css={styles.capitalize}>
        {urgency}
      </Text>
    </Fragment>
  );

  const timeDetails = (
    <Fragment>
      <Text as="p">
        {[
          mondays && 'Mondays',
          tuesdays && 'Tuesdays',
          wednesdays && 'Wednesdays',
          thursdays && 'Thursdays',
          fridays && 'Fridays',
          saturdays && 'Saturdays',
          sundays && 'Sundays',
          varies && 'Days vary',
        ]
          .filter((day) => !!day)
          .join(', ')}
      </Text>
      <Text as="p">
        {[
          mornings && 'Mornings',
          afternoons && 'Afternoons',
          evenings && 'Evenings',
          night && 'Night',
          timeVaries && 'Times vary',
        ]
          .filter((day) => !!day)
          .join(', ')}
      </Text>
      {recurring && <Text as="p">{t('request.review.recurring')}</Text>}
    </Fragment>
  );

  const childcareDetails = (
    <Text as="div">
      {Object.values(children || []).map((child, idx) => (
        <div key={idx}>
          <Text key={idx} as="div">
            Child {idx + 1}: {capitalize(child.birthMonth)}, {child.birthYear}
          </Text>
          <Text as="p">{child.specialNeeds}</Text>
        </div>
      ))}
    </Text>
  );

  const additionalDetails = (
    <Fragment>
      <Text type={TEXT_TYPE.BODY_3} as="p" css={styles.capitalize}>
        {additionalInfo || 'None'}
      </Text>
    </Fragment>
  );

  return (
    <Fragment>
      <div css={styles.card}>
        <SubRow
          label={t('request.review.serviceType')}
          details={serviceDetails}
          editLabel={t('global.form.changeLabel')}
          onClick={handleChangeService}
        />
      </div>
      <div css={styles.card}>
        <SubRow
          label={t('request.review.preferredTime')}
          details={timeDetails}
          editLabel={t('global.form.changeLabel')}
          onClick={handleChangeTime}
        />
      </div>
      <div css={styles.card}>
        <SubRow
          label={t('request.review.childcare.details')}
          details={childcareDetails}
          editLabel={t('global.form.changeLabel')}
          onClick={handleChangeDetails}
        />
      </div>
      <div css={styles.card}>
        <SubRow
          label={t('request.review.additionalInfo')}
          details={additionalDetails}
          editLabel={t('global.form.changeLabel')}
          onClick={handleChangeAdditionalInfo}
        />
      </div>
    </Fragment>
  );
};

export default ChildcareServiceReview;
