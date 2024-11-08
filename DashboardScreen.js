import React from 'react';
import { View, Text, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to your Dashboard</Text>
      <Button
        title="View Study Schedule"
        onPress={() => navigation.navigate('StudySchedule')}
      />
      <Button
        title="View Activity Tracking"
        onPress={() => navigation.navigate('ActivityTracking')}
      />
      <Button
        title="View Mood Detection"
        onPress={() => navigation.navigate('MoodDetection')}
      />
    </View>
  );
};

export default DashboardScreen;
