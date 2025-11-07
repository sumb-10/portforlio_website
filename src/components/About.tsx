export function About() {
  return (
    <div className="space-y-8">
      <h2 className="text-black pb-8 border-b border-black">About</h2>
      
      <div className="space-y-6 text-black/70">
        <div>
          <h3 className="text-black mb-3">배경</h3>
          <p className="leading-relaxed">
            컴퓨터공학을 전공하며 소프트웨어 개발의 기초를 다졌습니다. 
            사용자 경험을 중시하는 개발자로 성장하고 있습니다.
          </p>
        </div>
        
        <div>
          <h3 className="text-black mb-3">전문성</h3>
          <p className="leading-relaxed">
            React와 TypeScript를 활용한 프론트엔드 개발에 특화되어 있으며, 
            성능 최적화와 접근성을 고려한 웹 애플리케이션을 구축합니다.
          </p>
        </div>
        
        <div>
          <h3 className="text-black mb-3">관심 분야</h3>
          <p className="leading-relaxed">
            UI/UX 디자인 시스템, 웹 접근성, 그리고 오픈소스 기여에 
            관심이 많습니다. 지속 가능한 코드 작성을 추구합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
