/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx } from '@emotion/core';
import * as tools from '../functions';
import * as hospital_index from '../data/hospital_index';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import Text from 'components/Text';
import { TEXT_TYPE } from 'components/Text/constants';
import Form from 'components/Form';
import { ReactComponent as Plus } from 'static/icons/plus-circle.svg';

import Autosuggest from 'components/Autosuggest';
import { Space, Color } from 'lib/theme';
import FormGroup from 'components/Form/FormGroup';
import { IconButton } from 'components/Button';

const renderSuggestion = ({ hospital }, { query }) => {
  const nameMatches = AutosuggestHighlightMatch(hospital.name, query);
  const nameParts = AutosuggestHighlightParse(hospital.name, nameMatches);
  const nameMatch = (
    <span>
      {nameParts.map((part, index) => {
        const className = part.highlight
          ? 'react-autosuggest__suggestion-match'
          : null;

        return (
          <span className={className} key={index}>
            {part.text}
          </span>
        );
      })}
    </span>
  );

  const cityMatches = AutosuggestHighlightMatch(hospital.name, query);
  const cityParts = AutosuggestHighlightParse(hospital.city, cityMatches);
  const cityMatch = (
    <span>
      {cityParts.map((part, index) => {
        const className = part.highlight
          ? 'react-autosuggest__suggestion-match'
          : null;

        return (
          <span className={className} key={index}>
            {part.text}
          </span>
        );
      })}
    </span>
  );

  return (
    <div>
      <Text as="div" type={TEXT_TYPE.BODY_2}>
        {nameMatch}
      </Text>
      <Text as="div" type={TEXT_TYPE.NOTE}>
        {cityMatch}, {hospital.state}
      </Text>
    </div>
  );
};

const getHospitalName = ({ hospital, id }) => ({
  label: hospital.name,
  value: id,
});

function FacilityForm({ backend, history }) {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState('');

  const handleChange = useCallback((value) => {
    if (value.length > 1) {
      let term = value.toUpperCase();
      const searchResults = tools.updateSearch(hospital_index.index, term);
      setResults(searchResults);
    } else {
      setResults([]);
      setSelectedResult('');
    }
  }, []);

  const handleRedirect = useCallback(() => {
    if (!selectedResult) {
      return;
    }

    if (backend.authLoaded && backend.isLoggedIn()) {
      backend.dropSiteExists(selectedResult).then((exists) => {
        if (exists) {
          let url = '/dropsite/' + selectedResult + '/admin';
          history.push(url);
        } else {
          let url = '/dropsite/new/admin/' + selectedResult;
          history.push(url);
        }
      });
    } else {
      let url = '/signup/' + selectedResult;
      history.push(url);
    }
  }, [backend, history, selectedResult]);

  return (
    <Form
      onSubmit={handleRedirect}
      title="Find your healthcare facility"
      description="I'm a healthcare professional working at:"
      disabled={!selectedResult}
    >
      <Autosuggest
        label="City or healthcare facility"
        suggestions={results}
        onSearch={handleChange}
        getSuggestionValue={getHospitalName}
        renderSuggestion={renderSuggestion}
        onSelect={setSelectedResult}
      />
      <Text type={TEXT_TYPE.BODY_2}>
        <FormGroup mb={5}>Not seeing your facility?</FormGroup>
        <IconButton onClick={() => history.push('/new-facility')}>
          <Plus css={{ marginRight: Space.S5 }} />
          <span css={{ color: Color.CORAL }}>Find a facility</span>
        </IconButton>
      </Text>
    </Form>
  );
}

export default FacilityForm;
