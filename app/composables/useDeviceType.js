import { ref, onMounted, onUnmounted } from "vue";

export function useDeviceType() {
  const device = ref("desktop");

  const updateDevice = () => {
    const width = window.innerWidth;

    if (width < 768) {
      device.value = "phone";
    } else if (width < 1024) {
      device.value = "tablet";
    } else {
      device.value = "desktop";
    }
  };

  onMounted(() => {
    updateDevice();
    window.addEventListener("resize", updateDevice);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateDevice);
  });

  return { device };
}