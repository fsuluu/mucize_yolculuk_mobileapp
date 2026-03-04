import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { ClipboardList, GraduationCap, Target, HelpCircle, Bell, BarChart3, MessageSquare, User } from 'lucide-react';

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

const { width } = Dimensions.get('window');

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const menuItems = [
    { id: 'forms', label: 'Formlar', icon: ClipboardList, color: '#EFF6FF', iconColor: '#2563EB' },
    { id: 'education', label: 'Eğitimler', icon: GraduationCap, color: '#F0FDFA', iconColor: '#0D9488' },
    { id: 'goals', label: 'Günlük Hedefler', icon: Target, color: '#FFF7ED', iconColor: '#EA580C' },
    { id: 'faq', label: 'SSS', icon: HelpCircle, color: '#FAF5FF', iconColor: '#9333EA' },
    { id: 'notifications', label: 'Bildirimler', icon: Bell, color: '#FEF2F2', iconColor: '#DC2626' },
    { id: 'survey', label: 'Anket', icon: BarChart3, color: '#EEF2FF', iconColor: '#4F46E5' },
    { id: 'emergency', label: 'Whatsapp Acil', icon: MessageSquare, color: '#F0FDF4', iconColor: '#16A34A' },
  ];

  return (
    <View style={styles.container}>
      {/* Premium Welcome Card */}
      <View style={styles.welcomeCard}>
        <View style={styles.gradientHeader}>
          {/* Decorative Circle */}
          <View style={styles.decorativeCircle} />
          
          <View style={styles.profileRow}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <User size={32} color="#FFFFFF" strokeWidth={2.5} />
              </View>
              <View style={styles.onlineIndicator} />
            </View>
            
            <View style={styles.welcomeTextContainer}>
              <View style={styles.badgeRow}>
                <Text style={styles.badgeText}>Anne Paneli</Text>
                <View style={styles.badgeLine} />
              </View>
              <Text style={styles.userName}>
                Sayın <Text style={styles.userNameBold}>Sibel KARAKOÇ</Text>
              </Text>
              <Text style={styles.greeting}>Bugün kendinizi nasıl hissediyorsunuz?</Text>
            </View>
          </View>
        </View>
        
        {/* Quick Stats / Status Bar */}
        <View style={styles.statusBar}>
          <View style={styles.statusLeft}>
            <View style={styles.pulseDot} />
            <Text style={styles.statusText}>Sistem Aktif</Text>
          </View>
          <View style={styles.lastMeasureBox}>
            <Text style={styles.lastMeasureText}>Son Ölçüm: 92 mg/dL</Text>
          </View>
        </View>
      </View>

      {/* Grid Menu */}
      <View style={styles.grid}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onNavigate(item.id)}
            style={styles.menuItem}
          >
            <View style={[styles.iconBox, { backgroundColor: item.color }]}>
              <item.icon size={28} color={item.iconColor} />
            </View>
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#1A5F7A',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  gradientHeader: {
    backgroundColor: '#1A5F7A',
    padding: 24,
    position: 'relative',
  },
  decorativeCircle: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 160,
    height: 160,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 80,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 14,
    height: 14,
    backgroundColor: '#22C55E',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#1A5F7A',
  },
  welcomeTextContainer: {
    flex: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  badgeText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 9,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  badgeLine: {
    height: 1,
    width: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '400',
  },
  userNameBold: {
    fontWeight: '800',
  },
  greeting: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
  statusBar: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pulseDot: {
    width: 6,
    height: 6,
    backgroundColor: '#22C55E',
    borderRadius: 3,
  },
  statusText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  lastMeasureBox: {
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  lastMeasureText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1A5F7A',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
    paddingBottom: 32,
  },
  menuItem: {
    width: '47.5%', // Slightly less than 50% to account for gap/spacing
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 130,
    shadowColor: '#1A5F7A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  menuLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
    textAlign: 'center',
  },
});
