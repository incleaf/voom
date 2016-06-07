export default {
  _user_status: '유저 정보',
  user_status: {
    elimination: '평균 처치',
    damage_done: '평균 준 피해',
    death: '평균 죽음', //평균 죽음
    final_blow: '평균 결정타', //평균 결정타
    healing: '평균 치유', //평균 치유
    objective_kill: '평균 임무 기여 처치', //평균 임무 기여 처치
    objective_time: '평균 임무 기여 시간', //평균 임무 기여 시간
    solo_kill: '평균 단독 처치' //평균 단독처치
  },

  _career_stats: '플레이어 업적',
  career_stats: {
    _combat: '전투',
    combat: { //전투
      melee_final_blow: '근접 공격 결정타', //근접 공격 결정타 이값은
      solo_kill: '단독 처치', //단독 처치
      objective_kill: '임무 기여 처치', //임무 기여 처치
      final_blow: '결정타', //결정타
      damage_done: '준 피해', //준 피해
      eliminatios: '처치', //처치
      environmental_kill: '환경 요소로 처치', //환경 요소로 처치
      multikill: '동시 처치' //동시 처치
    },
    _assist: '지원',
    assist: { //지원
      healing: '치유', //치유
      recon_assist: '처치 시야 지원', //처치 시야 지원
      teleporter_destroyed: '순간이동기 파괴' //순간이동기 파괴
    },
    _best: '최고 기록',
    best: { //최고 기록
      elimination: '처치', //처치 - 한게임 최고기록
      final_blow: '결정타', //결정타 - 한게임 최고기록
      damage_done: '준 피해', //준 피해 - 한게임 최고기록
      healing: '치유', //치유 - 한게임 최고기록
      deffensive_assist: '방어형 도움', //방어형 도움 - 한게임 최고기록
      offensive_assist: '공격형 도움', //공격형 도움 - 한게임 최고기록
      objective_kill: '임무 기여 처치', //임무기여 처치 - 한게임 최고기록
      objective_time: '임무 기여 시간', //second(초) - 한게임 최고기록
      multi_kill: '동시 처치', //동시처치 - 최고 기록
      solo_kill: '단독 처치', //단독처치 - 한게임 최고기록
      time_spent_on_fire: '폭주 시간' //second(초)폭주시간 - 한게임 최고기록
    },
    _average: '평균',
    average: { //평균
      melee_final_blow: '근접 공격 결정타', //근접 공격 결정타
      final_blow: '결정타', //결정타
      time_spent_on_fire: '폭주 시간', //second(초)폭주시간
      solo_kill: '솔로킬', //솔로킬
      objective_time: '임무 기여 시간', //second(초) 임무기여 시간
      objective_kill: '임무 기여 처치', //임무 기여 처치
      healing_done: '치유', //치유
      death: '죽음', //죽음
      damage_done: '준 피해', //준피해
      elimination: '처치' //처치
    },
    _deaths: '죽음',
    deaths: { //죽음
      death: '죽음', //죽음
      environmental_death: '환경 요소로 죽음' //환경 요소로 죽음
    },
    _match_awards: '경기 보상',
    match_awards: { //경기 보상
      card: '칭찬 카드', //칭찬 카드
      medal: '메달', //메달
      medal_gold: '금메달', //메달-금
      medal_silver: '은메달', //메달-은
      medal_bronze: '동메달' //메달-동
    },
    _game: '게임',
    game: { //게임
      won: '승리', //승리
      played: '치른 게임', //치른게임
      time_spent_on_fire: '폭주 시간', //second(초) 폭주시간
      objective_time: '임무 기여 시간', //second(초) 임무 기여시간
      score: '점수', //점수
      time_played: '시간' //hours(시간)
    },
    _miscellaneous: '기타',
    miscellaneous: { //기타
      melee_final_blow_most_game: '근접 공격 결정타', //근접 공격 결정타 - 한게임 최고기록
      dffensive_assist: '방어형 도움', //방어형 도움
      dffensive_assist_average: '방어형 도움 - 평균', //방어형 도움 - 평균
      offensive_assist: '공격형 도움', //공격형 도움
      offensive_assist_average: '공격형 도움 - 평균', //공격형 도움 - 평균
      recon_assist: '처치 시야 지원 - 평균', //처치 시야 지원 - 평균
      recon_assist_most_game: '처치 시야 지원 - 한 게임 최고 기록' //처치 시야 지원 - 한 게임 최고기록
    }

  },
  _heroes: '영웅',
  heroes: [ //played_time으로 정렬할듯
    {
      name: '파라',
      thumbnail_url: 'http://cdn.voom.kr/heros/para.png',
      role: '영웅 타입', //O:offense, D:defense, T:tank, S: support
      played_time: '누적 플레이 시간', //second(초)
      score: '점수', //점수
      gold_medal: '금메달', //금메달
      silver_medal: '은메달', //은메달
      bronze_medal: '은메달', //동메달
      games: '총 게임 수', //총 게임수
      games_won: '승리', //승리한 게임수
      win_percentage: '승률', //(%) 승률
      eliminations: '누적 처치 수', //누적 처치수
      deaths: '누적 죽음', //누적 죽음
      avg_eliminations: '평균 처치', //평균 처치
      objective_kill: '평균 임무 기여 처치', //평균 임무기여 처치
      accuracy: '명중률', // (%) 명중률
      damage_done: '평균 준 피해', //평균 준 피해
      objective_time: '평균 임무 기여 시간' //second(초) 평균 임무기여 시간
    }
  ]

};
