import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Apple, Plus, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

export const NutritionAssessment: React.FC = () => {
  const [step, setStep] = useState<'form' | 'selection'>('form');
  const [totalCalories, setTotalCalories] = useState(80.50);
  const [selectedFood, setSelectedFood] = useState('Ayran');
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    if (!amount) return;
    const addedCals = parseFloat(amount) * 0.38;
    setTotalCalories(prev => prev + addedCals);
    setAmount('');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setStep('form');
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {step === 'form' ? (
        <View style={styles.stepContainer}>
          {/* Form Section */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Beslenme Ekleme Formu</Text>
            
            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Gebelik Haftasını Seçiniz</Text>
                <View style={styles.pickerSim}>
                  <Text style={styles.pickerText}>12. Hafta</Text>
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Öğünü Seçiniz</Text>
                <View style={styles.pickerSim}>
                  <Text style={styles.pickerText}>Sabah</Text>
                </View>
              </View>

              <TouchableOpacity 
                onPress={() => setStep('selection')}
                style={styles.nextButton}
              >
                <Text style={styles.nextButtonText}>Besin Seçimine Git</Text>
                <ChevronRight size={16} color="#159895" />
              </TouchableOpacity>
            </View>

            <View style={styles.statsBox}>
              <Text style={styles.statsLabel}>Toplam Kalori:</Text>
              <Text style={styles.statsValue}>{totalCalories.toFixed(2)} cal</Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.stepContainer}>
          <TouchableOpacity 
            onPress={() => setStep('form')}
            style={styles.backButton}
          >
            <ChevronLeft size={14} color="#1A5F7A" />
            <Text style={styles.backButtonText}>Geri Dön</Text>
          </TouchableOpacity>

          {/* Add Food Section */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Besin Ekleme</Text>
            
            <View style={styles.form}>
              <View style={styles.pickerSim}>
                <Text style={styles.pickerText}>{selectedFood}</Text>
              </View>

              <View style={styles.infoBox}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Besin Adı</Text>
                  <Text style={styles.infoValue}>{selectedFood}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Kalorisi</Text>
                  <Text style={styles.infoValue}>114 cal / 300 Cc</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Ölçüm Birimi</Text>
                  <Text style={styles.infoValue}>Cc</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Ölçüm Açıklaması</Text>
                  <Text style={styles.infoValue}>1,5 su bardağı = 300 ml</Text>
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Besin miktarını giriniz (Cc)</Text>
                <TextInput 
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Miktar giriniz..."
                  value={amount}
                  onChangeText={setAmount}
                />
              </View>

              <TouchableOpacity 
                onPress={handleSave}
                style={[styles.saveButton, showSuccess && styles.successButton]}
              >
                {showSuccess ? (
                  <CheckCircle2 size={18} color="#FFFFFF" />
                ) : (
                  <Text style={styles.saveButtonText}>LİSTEYE KAYDET</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepContainer: {
    gap: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  backButtonText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1A5F7A',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 24,
    shadowColor: '#1A5F7A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    gap: 10,
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginLeft: 4,
  },
  pickerSim: {
    height: 52,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  pickerText: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '600',
  },
  nextButton: {
    height: 52,
    backgroundColor: 'rgba(21, 152, 149, 0.08)',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(21, 152, 149, 0.15)',
    marginTop: 8,
  },
  nextButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#159895',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statsBox: {
    marginTop: 24,
    backgroundColor: '#F8FAFC',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  statsLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  statsValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A5F7A',
  },
  infoBox: {
    backgroundColor: 'rgba(26, 95, 122, 0.05)',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(26, 95, 122, 0.1)',
    gap: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  infoValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E293B',
  },
  input: {
    height: 52,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#1E293B',
  },
  saveButton: {
    height: 52,
    backgroundColor: '#1A5F7A',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1A5F7A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
    marginTop: 8,
  },
  successButton: {
    backgroundColor: '#22C55E',
    shadowColor: '#22C55E',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
