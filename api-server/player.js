module.exports = {
  user_status: {
    elimination: 8.34, //평균 처치
    damage_done: 3765, //평균 준 피해
    death: 6.87, //평균 죽음
    final_blow: 4.35, //평균 결정타
    healing: 503, //평균 치유
    objective_kill: 2.74, //평균 임무 기여 처치
    objective_time: 22, //평균 임무 기여 시간
    solo_kill: 1.52, //평균 단독처치
  },
  career_stats: {
    combat: { //전투
      melee_final_blow: 1, //근접 공격 결정타 이값은 optional임
      solo_kill: 158, //단독 처치
      objective_kill: 177, //임무 기여 처치
      final_blow: 331, //결정타
      damage_done: 18003, //준 피해
      eliminatios: 547, //처치
      environmental_kill: 2, //환경 요소로 처치
      multikill: 1 //동시 처치
    },
    assist: { //지원
      healing: 10434, //치유
      recon_assist: 12, //처치 시야 지원
      teleporter_destroyed: 1 //순간이동기 파괴
    },
    best: { //최고 기록
      elimination: 29, //처치 - 한게임 최고기록
      final_blow: 15, //결정타 - 한게임 최고기록
      damage_done: 1314, //준 피해 - 한게임 최고기록
      healing: 5503, //치유 - 한게임 최고기록
      deffensive_assist: 10, //방어형 도움 - 한게임 최고기록
      offensive_assist: 4, //공격형 도움 - 한게임 최고기록
      objective_kill: 4, //임무기여 처치 - 한게임 최고기록
      objective_time: 90, //second(초) - 한게임 최고기록
      multi_kill: 3, //동시처치 - 최고 기록
      solo_kill: 15, //단독처치 - 한게임 최고기록
      time_spent_on_fire: 392 //second(초)폭주시간 - 한게임 최고기록

    },
    average: { //평균
      melee_final_blow: 0.02, //근접 공격 결정타
      final_blow: 0.02, //결정타
      time_spent_on_fire: 39, //second(초)폭주시간
      solo_kill: 5.36, //솔로킬
      objective_time: 27, //second(초) 임무기여 시간
      objective_kill: 2.74, //임무 기여 처치
      healing_done: 403, //치유
      final_blow: 4.35, //결정타
      death: 6.87, //죽음
      damage_done: 3939, //준피해
      elimination: 8.34 //처치
    },
    deaths: { //죽음
      death: 5322, //죽음
      environmental_death: 93 //환경 요소로 죽음
    },
    match_awards: { //경기 보상
      card: 25, //칭찬 카드
      medal: 184, //메달
      medal_gold: 52, //메달-금
      medal_silver: 80, //메달-은
      medal_bronze: 52 //메달-동
    },
    game: { //게임
      won: 37, //승리
      played: 82, //치른게임
      time_spent_on_fire: 1280, //second(초) 폭주시간
      objective_time: 1886, //second(초) 임무 기여시간
      score: 60667, //점수
      time_played: 10 //hours(시간)
    },
    miscellaneous: { //기타
      melee_final_blow_most_game: 3, //근접 공격 결정타 - 한게임 최고기록
      dffensive_assist: 136, //방어형 도움
      dffensive_assist_average: 0, //방어형 도움 - 평균
      offensive_assist: 59, //공격형 도움
      offensive_assist_average: 0, //공격형 도움 - 평균
      recon_assist: 0, //처치 시야 지원 - 평균
      recon_assist_most_game: 9 //처치 시야 지원 - 한 게임 최고기록
    }

  },
  heroes: [ //played_time으로 정렬할듯
    {
      name: '파라',
      thumbnail_url: 'http://cdn.voom.kr/heros/para.png',
      role: 'O', //O:offense, D:defense, T:tank, S: support
      played_time: 30000, //second(초)
      score: 16163, //점수
      gold_medal: 3, //금메달
      silver_medal: 7, //은메달
      bronze_medal: 4, //동메달
      games: 60, //총 게임수
      games_won: 20, //승리한 게임수
      win_percentage: 30, //(%) 승률
      eliminations: 1427, //누적 처치수
      deaths: 405, //누적 죽음
      avg_eliminations: 3.99, //평균 처치
      objective_kill: 24, //평균 임무기여 처치
      accuracy: 28, // (%) 명중률
      damage_done: 8200, //평균 준 피해
      objective_time: 290 //second(초) 평균 임무기여 시간
    },
    {
      name: '라인하르트',
      thumbnail_url: 'http://cdn.voom.kr/heros/rein.png',
      role: 'T', //O:offense, D:defense, T:tank, S: support
      played_time: 30000, //second(초)
      score: 16163, //점수
      gold_medal: 3, //금메달
      silver_medal: 7, //은메달
      bronze_medal: 4, //동메달
      games: 60, //총 게임수
      games_won: 20, //승리한 게임수
      win_percentage: 30, //(%) 승률
      eliminations: 1427, //누적 처치수
      deaths: 405, //누적 죽음
      avg_eliminations: 3.99, //평균 처치
      objective_kill: 24, //평균 임무기여 처치
      accuracy: 0, // (%) 명중률 0으로 넣을지 '-'로 넣을진 아직모름
      damage_blocked: 8200, //평균 막은 피해
      objective_time: 290, //second(초) 평균 임무기여 시간
    },
    {
      name: '메르시',
      thumbnail_url: 'http://cdn.voom.kr/heros/mercy.png',
      role: 'S', //O:offense, D:defense, T:tank, S: support
      played_time: 30000, //second(초)
      score: 16163, //점수
      gold_medal: 3, //금메달
      silver_medal: 7, //은메달
      bronze_medal: 4, //동메달
      games: 60, //총 게임수
      games_won: 20, //승리한 게임수
      win_percentage: 30, //(%) 승률
      eliminations: 1427, //누적 처치수
      deaths: 405, //누적 죽음
      avg_eliminations: 3.99, //평균 처치
      objective_kill: 24, //평균 임무기여 처치
      accuracy: 30, // (%) 명중률
      healing: 3044, //평균 힐링
      objective_time: 290, //second(초) 평균 임무기여 시간
    },
  ]
};
