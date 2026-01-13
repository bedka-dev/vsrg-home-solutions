import { colors } from "./colors";
import { MapPin } from "./Icons";

const DFWMap = () => (
  <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ height: "350px" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429155.25456899043!2d-97.19752849218748!3d32.82058547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647571f!2sDallas-Fort%20Worth%20Metroplex%2C%20TX!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="DFW Metroplex Map"
    />
    <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg shadow-md" style={{ backgroundColor: colors.primary }}>
      <div className="flex items-center gap-2 text-white">
        <MapPin className="w-4 h-4" style={{ color: colors.secondary }} />
        <span className="text-sm font-semibold">We Buy Houses in All DFW Cities</span>
      </div>
    </div>
  </div>
);

export default DFWMap;
