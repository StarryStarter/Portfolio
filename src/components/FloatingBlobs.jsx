export default function FloatingBlobs() {
  const blobStyle = { willChange: 'transform', contain: 'strict' }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-grid-fade" />

      <div style={blobStyle} className="absolute -top-40 -left-32 w-[32rem] h-[32rem] rounded-full bg-emerald/10 blur-[120px] animate-blob" />
      <div style={blobStyle} className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full bg-[#7C9CFF]/10 blur-[120px] animate-blob [animation-delay:4s]" />
      <div style={blobStyle} className="absolute bottom-0 left-1/4 w-[24rem] h-[24rem] rounded-full bg-emerald/5 blur-[110px] animate-blob [animation-delay:8s]" />
      <div style={blobStyle} className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full bg-[#7C9CFF]/10 blur-[120px] animate-blob [animation-delay:4s]" />
      <div style={blobStyle} className="absolute bottom-0 left-1/4 w-[24rem] h-[24rem] rounded-full bg-emerald/5 blur-[110px] animate-blob [animation-delay:8s]" />
    </div>
  )
}
