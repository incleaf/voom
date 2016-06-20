export default {
  "user_status": {
    "childs": {
      "ranking": {
        "text": {
          "kr": "랭킹",
          "en": "Ranking"
        },
        "type": "int"
      },
      "elimination": {
        "text": {
          "kr": "평균 처치",
          "en": "elimination"
        },
        "type": "int"
      },
      "damage_done": {
        "text": {
          "kr": "평균 준 피해",
          "en": "damage_done"
        },
        "type": "int"
      },
      "death": {
        "text": {
          "kr": "평균 죽음",
          "en": "death"
        },
        "type": "int"
      },
      "final_blow": {
        "text": {
          "kr": "평균 결정타",
          "en": "final_blow"
        },
        "type": "int"
      },
      "healing": {
        "text": {
          "kr": "평균 치유",
          "en": "healing"
        },
        "type": "int"
      },
      "objective_kill": {
        "text": {
          "kr": "평균 임무 기여 처치",
          "en": "objective_kill"
        },
        "type": "int"
      },
      "objective_time": {
        "text": {
          "kr": "평균 임무 기여 시간",
          "en": "objective_time"
        },
        "type": "time"
      },
      "solo_kill": {
        "text": {
          "kr": "평균 단독 처치",
          "en": "solo_kill"
        },
        "type": "int"
      }
    },
    "text": {
      "kr": "유저 정보",
      "en": "user_status"
    },
    "type": "object"
  },
  "career_stats": {
    "childs": {
      "_combat": "전투",
      "combat": {
        "childs": {
          "melee_final_blow": {
            "text": {
              "kr": "근접 공격 결정타",
              "en": "melee_final_blow"
            },
            "type": "int"
          },
          "solo_kill": {
            "text": {
              "kr": "단독 처치",
              "en": "solo_kill"
            },
            "type": "int"
          },
          "objective_kill": {
            "text": {
              "kr": "임무 기여 처치",
              "en": "objective_kill"
            },
            "type": "int"
          },
          "final_blow": {
            "text": {
              "kr": "결정타",
              "en": "final_blow"
            },
            "type": "int"
          },
          "damage_done": {
            "text": {
              "kr": "준 피해",
              "en": "damage_done"
            },
            "type": "int"
          },
          "eliminatios": {
            "text": {
              "kr": "처치",
              "en": "eliminatios"
            },
            "type": "int"
          },
          "environmental_kill": {
            "text": {
              "kr": "환경 요소로 처치",
              "en": "environmental_kill"
            },
            "type": "int"
          },
          "multikill": {
            "text": {
              "kr": "동시 처치",
              "en": "multikill"
            },
            "type": "int"
          }
        },
        "text": {
          "kr": "전투",
          "en": "combat"
        },
        "type": "object"
      },
      "_assist": "지원",
      "assist": {
        "childs": {
          "healing": {
            "text": {
              "kr": "치유",
              "en": "healing"
            },
            "type": "int"
          },
          "recon_assist": {
            "text": {
              "kr": "처치 시야 지원",
              "en": "recon_assist"
            },
            "type": "int"
          },
          "teleporter_destroyed": {
            "text": {
              "kr": "순간이동기 파괴",
              "en": "teleporter_destroyed"
            },
            "type": "int"
          }
        },
        "text": {
          "kr": "지원",
          "en": "assist"
        },
        "type": "object"
      },
      "_best": "최고 기록",
      "best": {
        "childs": {
          "elimination": {
            "text": {
              "kr": "처치",
              "en": "elimination"
            },
            "type": "int"
          },
          "final_blow": {
            "text": {
              "kr": "결정타",
              "en": "final_blow"
            },
            "type": "int"
          },
          "damage_done": {
            "text": {
              "kr": "준 피해",
              "en": "damage_done"
            },
            "type": "int"
          },
          "healing": {
            "text": {
              "kr": "치유",
              "en": "healing"
            },
            "type": "int"
          },
          "deffensive_assist": {
            "text": {
              "kr": "방어형 도움",
              "en": "deffensive_assist"
            },
            "type": "int"
          },
          "offensive_assist": {
            "text": {
              "kr": "공격형 도움",
              "en": "offensive_assist"
            },
            "type": "int"
          },
          "objective_kill": {
            "text": {
              "kr": "임무 기여 처치",
              "en": "objective_kill"
            },
            "type": "int"
          },
          "objective_time": {
            "text": {
              "kr": "임무 기여 시간",
              "en": "objective_time"
            },
            "type": "time"
          },
          "multi_kill": {
            "text": {
              "kr": "동시 처치",
              "en": "multi_kill"
            },
            "type": "int"
          },
          "solo_kill": {
            "text": {
              "kr": "단독 처치",
              "en": "solo_kill"
            },
            "type": "int"
          },
          "time_spent_on_fire": {
            "text": {
              "kr": "폭주 시간",
              "en": "time_spent_on_fire"
            },
            "type": "time"
          }
        },
        "text": {
          "kr": "최고 기록",
          "en": "best"
        },
        "type": "object"
      },
      "_average": "평균",
      "average": {
        "childs": {
          "melee_final_blow": {
            "text": {
              "kr": "근접 공격 결정타",
              "en": "melee_final_blow"
            },
            "type": "int"
          },
          "final_blow": {
            "text": {
              "kr": "결정타",
              "en": "final_blow"
            },
            "type": "int"
          },
          "time_spent_on_fire": {
            "text": {
              "kr": "폭주 시간",
              "en": "time_spent_on_fire"
            },
            "type": "time"
          },
          "solo_kill": {
            "text": {
              "kr": "솔로킬",
              "en": "solo_kill"
            },
            "type": "int"
          },
          "objective_time": {
            "text": {
              "kr": "임무 기여 시간",
              "en": "objective_time"
            },
            "type": "time"
          },
          "objective_kill": {
            "text": {
              "kr": "임무 기여 처치",
              "en": "objective_kill"
            },
            "type": "int"
          },
          "healing_done": {
            "text": {
              "kr": "치유",
              "en": "healing_done"
            },
            "type": "int"
          },
          "death": {
            "text": {
              "kr": "죽음",
              "en": "death"
            },
            "type": "int"
          },
          "damage_done": {
            "text": {
              "kr": "준 피해",
              "en": "damage_done"
            },
            "type": "int"
          },
          "elimination": {
            "text": {
              "kr": "처치",
              "en": "elimination"
            },
            "type": "int"
          }
        },
        "text": {
          "kr": "평균",
          "en": "average"
        },
        "type": "object"
      },
      "_deaths": "죽음",
      "deaths": {
        "childs": {
          "death": {
            "text": {
              "kr": "죽음",
              "en": "death"
            },
            "type": "int"
          },
          "environmental_death": {
            "text": {
              "kr": "환경 요소로 죽음",
              "en": "environmental_death"
            },
            "type": "int"
          }
        },
        "text": {
          "kr": "죽음",
          "en": "deaths"
        },
        "type": "object"
      },
      "_match_awards": "경기 보상",
      "match_awards": {
        "childs": {
          "card": {
            "text": {
              "kr": "칭찬 카드",
              "en": "card"
            },
            "type": "int"
          },
          "medal": {
            "text": {
              "kr": "메달",
              "en": "medal"
            },
            "type": "int"
          },
          "medal_gold": {
            "text": {
              "kr": "금메달",
              "en": "medal_gold"
            },
            "type": "int"
          },
          "medal_silver": {
            "text": {
              "kr": "은메달",
              "en": "medal_silver"
            },
            "type": "int"
          },
          "medal_bronze": {
            "text": {
              "kr": "동메달",
              "en": "medal_bronze"
            },
            "type": "int"
          }
        },
        "text": {
          "kr": "경기 보상",
          "en": "match_awards"
        },
        "type": "object"
      },
      "_game": "게임",
      "game": {
        "childs": {
          "won": {
            "text": {
              "kr": "승리",
              "en": "won"
            },
            "type": "int"
          },
          "played": {
            "text": {
              "kr": "치른 게임",
              "en": "played"
            },
            "type": "int"
          },
          "time_spent_on_fire": {
            "text": {
              "kr": "폭주 시간",
              "en": "time_spent_on_fire"
            },
            "type": "time"
          },
          "objective_time": {
            "text": {
              "kr": "임무 기여 시간",
              "en": "objective_time"
            },
            "type": "time"
          },
          "score": {
            "text": {
              "kr": "점수",
              "en": "score"
            },
            "type": "int"
          },
          "time_played": {
            "text": {
              "kr": "시간",
              "en": "time_played"
            },
            "type": "time"
          }
        },
        "text": {
          "kr": "게임",
          "en": "game"
        },
        "type": "object"
      },
      "miscellaneous": {
        "childs": {
          "melee_final_blow_most_game": {
            "text": {
              "kr": "근접 공격 결정타",
              "en": "melee_final_blow_most_game"
            },
            "type": "int"
          },
          "dffensive_assist": {
            "text": {
              "kr": "방어형 도움",
              "en": "dffensive_assist"
            },
            "type": "int"
          },
          "dffensive_assist_average": {
            "text": {
              "kr": "방어형 도움 - 평균",
              "en": "dffensive_assist_average"
            },
            "type": "int"
          },
          "offensive_assist": {
            "text": {
              "kr": "공격형 도움",
              "en": "offensive_assist"
            },
            "type": "int"
          },
          "offensive_assist_average": {
            "text": {
              "kr": "공격형 도움 - 평균",
              "en": "offensive_assist_average"
            },
            "type": "int"
          },
          "recon_assist": {
            "text": {
              "kr": "처치 시야 지원 - 평균",
              "en": "recon_assist"
            },
            "type": "int"
          },
          "recon_assist_most_game": {
            "text": {
              "kr": "처치 시야 지원 - 한 게임 최고 기록",
              "en": "recon_assist_most_game"
            },
            "type": "int"
          }
        },
        "text": {
          "kr": "기타",
          "en": "miscellaneous"
        },
        "type": "object"
      }
    },
    "text": {
      "kr": "플레이어 업적",
      "en": "career_stats"
    },
    "type": "object"
  },
  "heroes": [{
    "name": {
      "text": {
        "kr": "닉네임",
        "en": "name"
      },
      "type": "string"
    },
    "thumbnail_url": {
      "text": {
        "kr": "thumbnail_url",
        "en": "thumbnail_url"
      },
      "type": "string" // URL?
    },
    "role": {
      "text": {
        "kr": "영웅 타입",
        "en": "role"
      },
      "type": "int"
    },
    "played_time": {
      "text": {
        "kr": "누적 플레이 시간",
        "en": "played_time"
      },
      "type": "time"
    },
    "score": {
      "text": {
        "kr": "점수",
        "en": "score"
      },
      "type": "int"
    },
    "gold_medal": {
      "text": {
        "kr": "금메달",
        "en": "gold_medal"
      },
      "type": "int"
    },
    "silver_medal": {
      "text": {
        "kr": "은메달",
        "en": "silver_medal"
      },
      "type": "int"
    },
    "bronze_medal": {
      "text": {
        "kr": "은메달",
        "en": "bronze_medal"
      },
      "type": "int"
    },
    "games": {
      "text": {
        "kr": "총 게임 수",
        "en": "games"
      },
      "type": "int"
    },
    "games_won": {
      "text": {
        "kr": "승리",
        "en": "games_won"
      },
      "type": "int"
    },
    "win_percentage": {
      "text": {
        "kr": "승률",
        "en": "win_percentage"
      },
      "type": "percentage"
    },
    "eliminations": {
      "text": {
        "kr": "누적 처치 수",
        "en": "eliminations"
      },
      "type": "int"
    },
    "deaths": {
      "text": {
        "kr": "누적 죽음",
        "en": "deaths"
      },
      "type": "int"
    },
    "avg_eliminations": {
      "text": {
        "kr": "평균 처치",
        "en": "avg_eliminations"
      },
      "type": "int"
    },
    "objective_kill": {
      "text": {
        "kr": "평균 임무 기여 처치",
        "en": "objective_kill"
      },
      "type": "int"
    },
    "accuracy": {
      "text": {
        "kr": "명중률",
        "en": "accuracy"
      },
      "type": "percentage"
    },
    "damage_done": {
      "text": {
        "kr": "평균 준 피해",
        "en": "damage_done"
      },
      "type": "int"
    },
    "objective_time": {
      "text": {
        "kr": "평균 임무 기여 시간",
        "en": "objective_time"
      },
      "type": "time"
    }
  }],
  "custom": {
    "winningRate": {
      "text": {
        "kr": "승률",
        "en": "Winning Rate"
      },
      "type": "percentage",
      "value": (data) => (data.career_stats.game.won / data.career_stats.game.played) * 100
    },
    "killDeathRatio": {
      "text": {
        "kr": "K/D",
        "en": "K/D"
      },
      "type": "float",
      "value": (data) => (data.career_stats.combat.elimination / data.career_stats.deaths.death) * 100
    },
    "loseGame": {
      "text": {
        "kr": "패배",
        "en": "Game Losed"
      },
      "type": "int",
      "value": (data) => (data.career_stats.game.played - data.career_stats.game.won)
    }
    //"killDeathRatio": {
    //  "text:": {
    //    "kr": "K/D",
    //    "en": "K/D"
    //  },
    //  "type": "float",
    //  "value": (data) => (data.career_stats.elimination / data.career_stats.deaths.death) * 100
    //}
  }
};

/*
function convert(object) {
  Object.keys(object).map(function(key, idx) {
    if (key[0] === '_') {

    } else if (Array.isArray(object[key]) === true) {
      for (let i = 0; i < object[key].length; i ++) {
        object[key][i] = convert(object[key][i])
      }
    } else if (typeof object[key] === 'string' || typeof object[key] === 'number') {
      object[key] = {
        text: {
          kr: object[key],
          en: key
        },
        type: 'int'
      }
    } else {
      object[key] = {
        childs: convert(object[key]),
        text: {
          kr: object['_'+key],
          en: key
        },
        type: 'object'
      }

    }
  });

  return object;
}
  */
