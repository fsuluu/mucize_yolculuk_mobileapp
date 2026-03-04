import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native';
import { ChevronLeft, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showLogout?: boolean;
  onLogout?: () => void;
}

const { width, height } = Dimensions.get('window');

export const MobileLayout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  showBack, 
  onBack,
  showLogout,
  onLogout
}) => {
  // On web, we simulate a phone frame. On native, we use full screen.
  const isWeb = Platform.OS === 'web';

  const content = (
    <View style={isWeb ? styles.phoneFrame : styles.container}>
      {/* Notch (Web only) */}
      {isWeb && <View style={styles.notch} />}
      
      {/* Header */}
      {(title || showBack || showLogout) && (
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {showBack && (
              <TouchableOpacity onPress={onBack} style={styles.iconButton}>
                <ChevronLeft size={24} color="#FFFFFF" />
              </TouchableOpacity>
            )}
            {title && <Text style={styles.headerTitle}>{title}</Text>}
          </View>
          {showLogout && (
            <TouchableOpacity onPress={onLogout} style={styles.iconButton}>
              <LogOut size={20} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Content */}
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>

      {/* Home Indicator (Web only) */}
      {isWeb && <View style={styles.homeIndicator} />}
    </View>
  );

  if (isWeb) {
    return (
      <View style={styles.webWrapper}>
        {content}
      </View>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  webWrapper: {
    flex: 1,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  phoneFrame: {
    width: 375,
    height: 812,
    backgroundColor: '#F8FAFC',
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 8,
    borderColor: '#1E293B',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  notch: {
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: -60,
    width: 120,
    height: 24,
    backgroundColor: '#1E293B',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    zIndex: 50,
  },
  header: {
    backgroundColor: '#1A5F7A',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingBottom: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    marginLeft: -60,
    width: 120,
    height: 5,
    backgroundColor: '#CBD5E1',
    borderRadius: 10,
  },
});
