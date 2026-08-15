export function Mark({ variant = 'light' }) {
  const isDark = variant === 'dark';
  return (
    <div className="flex items-center gap-2">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-royal' : 'bg-royal'}`}>
        <span className="text-white font-bold text-sm">hG</span>
      </div>
      <span className={`font-bold text-lg tracking-tight ${isDark ? 'text-gray-900' : 'text-white'}`}>
        hum<span className="text-royal">AI</span>ne
      </span>
    </div>
  );
}
