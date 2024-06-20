import { FontAwesome6 } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useEffect, useRef } from 'react';
import { Image, Text, View } from 'react-native';

import scooterImage from '~/assets/scooter.png';
import { useScooter } from '~/providers/ScooterProvider';
import { Button } from './Button';

export default function SelectedScooterSheet() {
  const { selectedScooter, duration, distance, isNearby } = useScooter();
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (selectedScooter) {
      bottomSheetRef.current?.expand();
    }
  }, [selectedScooter]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={[200]}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: '#414442' }}>
      {selectedScooter && (
        <BottomSheetView style={{ flex: 1, padding: 10, gap: 20 }}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Image source={scooterImage} style={{ width: 60, height: 60 }} />

            <View style={{ flex: 1, gap: 5 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>Lime - S</Text>

              <Text style={{ color: 'gray', fontSize: 18 }}>
                id-{selectedScooter.id} · Madison Avenue
              </Text>
            </View>

            <View style={{ gap: 5 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  alignSelf: 'flex-start',
                }}>
                <FontAwesome6 name="flag-checkered" size={18} color="#42E100" />

                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                  {(distance / 1000).toFixed(1)} km
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  alignSelf: 'flex-start',
                }}>
                <FontAwesome6 name="clock" size={18} color="#42E100" />

                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                  {(duration / 60).toFixed(0)} min
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Button title="Start journey" disabled={!isNearby} />
          </View>
        </BottomSheetView>
      )}
    </BottomSheet>
  );
}
