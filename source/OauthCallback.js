import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchData } from './api';

export default function OAuthCallback({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const { params } = navigation.state;
    if (params && params.access_token) {
      const accessToken = params.access_token;
      fetchData(accessToken)
        .then((result) => {
          setData(result.records);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [navigation]);

  return (
    <View>
      <Text>Data fetched from Salesforce:</Text>
      {data.map((record) => (
        <Text key={record.Id}>{record.Name}</Text>
      ))}
    </View>
  );
}
