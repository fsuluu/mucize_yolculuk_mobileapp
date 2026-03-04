import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Target, CheckCircle2, Info, Droplets, Apple, Activity } from 'lucide-react';

export const DailyGoals: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Compact Header Card */}
      <View style={styles.headerCard}>
        <View style={styles.decorativeCircle} />
        <View style={styles.iconBox}>
          <Apple size={28} color="#FFFFFF" />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Günlük Hedefler</Text>
          <Text style={styles.headerSubtitle}>Sağlıklı bir gebelik için hedefleriniz</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Droplets size={20} color="#1A5F7A" />
            <Text style={styles.sectionTitle}>Gebelik Hedef Kan Şekeri</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Açlık kan şekerlerinin <Text style={styles.highlight}>≤95mg/dl</Text> ve</Text>
            <Text style={styles.cardText}>Tokluk kan şekerinin;</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>• 1. saatte <Text style={styles.highlight}>≤140mg/dl</Text></Text>
              <Text style={styles.listItem}>• 2. saatte <Text style={styles.highlight}>≤120mg/dl</Text> olması hedeflenir</Text>
            </View>
            <View style={styles.warningBox}>
              <Text style={styles.warningText}>
                Gün içerisinde hiçbir ölçüm 60 mg/dl altında olmamalı!
              </Text>
            </View>
            <Text style={styles.cardText}>HbA1c <Text style={styles.highlight}>≤%6,5</Text> (tercihen ≤%6,0)</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Apple size={20} color="#1A5F7A" />
            <Text style={styles.sectionTitle}>Beslenme</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Gebelik boyunca almanız gereken ideal kilo alımı: <Text style={styles.highlight}>12,5-18 kg</Text>'dır.</Text>
            <Text style={styles.cardText}>Bir gün boyunca almanız gereken kalori: <Text style={styles.highlight}>2200 kcal</Text></Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Activity size={20} color="#1A5F7A" />
            <Text style={styles.sectionTitle}>Egzersiz</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Hekimin gebeye egzersiz yapma konusunda bir sakıncası olmadığı takdirde gebelerin haftada en az 3 gün en az 20-30 dakikalık hafif - orta yoğunlukta düzenli egzersiz yapmaları önerilmektedir.</Text>
            <Text style={styles.cardText}>Gebeler için düzenli yapılabilen ve en uygun egzersiz tempolu yürüyüştür.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Info size={20} color="#1A5F7A" />
            <Text style={styles.sectionTitle}>Açıklama</Text>
          </View>
          <View style={[styles.card, styles.infoCard]}>
            <Text style={styles.infoText}>
              Her gün mutlaka 2,5-3 litre su tüketmeye özen gösteriniz.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  headerCard: {
    backgroundColor: '#14B8A6',
    borderRadius: 28,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#14B8A6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
    marginBottom: 24,
  },
  decorativeCircle: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 120,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 60,
  },
  iconBox: {
    width: 52,
    height: 52,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '500',
    marginTop: 2,
  },
  content: {
    gap: 28,
    paddingBottom: 40,
  },
  section: {
    gap: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1A5F7A',
    letterSpacing: -0.5,
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
    gap: 14,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  cardText: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
    fontWeight: '500',
  },
  highlight: {
    fontWeight: '800',
    color: '#1A5F7A',
  },
  list: {
    paddingLeft: 8,
    gap: 6,
  },
  listItem: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
    fontWeight: '500',
  },
  warningBox: {
    backgroundColor: '#FEF2F2',
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    marginTop: 4,
  },
  warningText: {
    fontSize: 13,
    color: '#DC2626',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 18,
  },
  infoCard: {
    backgroundColor: 'rgba(21, 152, 149, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(21, 152, 149, 0.15)',
  },
  infoText: {
    fontSize: 14,
    color: '#159895',
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 20,
  },
});
