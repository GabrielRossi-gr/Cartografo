import { Platform, StatusBar, StyleSheet } from "react-native";

// Paleta de cores oficial da Apple (Dark Mode)
const AppleColors = {
  background: "#000000",
  secondaryBackground: "#1C1C1E",
  tertiaryBackground: "#2C2C2E",
  label: "#FFFFFF",
  secondaryLabel: "#8E8E93",
  systemBlue: "#0A84FF",
  systemGreen: "#34C759",
  separator: "rgba(255, 255, 255, 0.15)",
};

export default StyleSheet.create({
  // Container Principal
  mainContainer: {
    flex: 1,
    backgroundColor: AppleColors.background,
  },

  // Header Estilo "Large Title"
  headerWrapper: {
    width: "100%",
    zIndex: 100,
  },
  blurContainer: {
    paddingTop:
      Platform.OS === "ios" ? 60 : (StatusBar.currentHeight ?? 0) + 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: AppleColors.separator,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 4,
  },
  countryBadge: {
    backgroundColor: AppleColors.tertiaryBackground,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  countryText: {
    color: AppleColors.systemBlue,
    fontSize: 12,
    fontWeight: "600",
  },
  largeTitle: {
    fontSize: 34,
    fontWeight: "800",
    color: AppleColors.label,
    letterSpacing: 0.4,
  },

  // Conteúdo e Listas (Inset Grouped)
  scrollContent: {
    paddingBottom: 140, // Espaço para o botão flutuante
  },
  sectionLabel: {
    fontSize: 13,
    color: AppleColors.secondaryLabel,
    marginLeft: 32,
    marginBottom: 8,
    marginTop: 20,
    textTransform: "uppercase",
  },
  iosGroup: {
    backgroundColor: AppleColors.secondaryBackground,
    borderRadius: 10,
    marginHorizontal: 16,
    overflow: "hidden",
  },
  iosRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: AppleColors.separator,
    marginLeft: 16, // Separador não encosta na esquerda (padrão iOS)
  },

  // Tipografia
  label: {
    fontSize: 17,
    color: AppleColors.label,
  },
  value: {
    fontSize: 17,
    color: AppleColors.secondaryLabel,
  },
  monoValue: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    color: AppleColors.secondaryLabel,
  },

  // Mapa
  mapContainer: {
    marginTop: 0,
    marginHorizontal: 16,
    height: 220,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: AppleColors.secondaryBackground,
  },

  // Botão Flutuante com Efeito Glass
  footerBlur: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 15,
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: AppleColors.separator,
  },
  mainButton: {
    backgroundColor: AppleColors.systemBlue,
    height: 52,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#FFF",
  },

  subLabel: {
    fontSize: 13,
    color: AppleColors.secondaryLabel,
    // textTransform: "uppercase",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 32,
    marginBottom: 8,
  },
});
