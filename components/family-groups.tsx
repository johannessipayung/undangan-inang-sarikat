export default function FamilyGroups() {
  const familyGroups = [
    {
      title: 'Anak ke-1',
      groups: [
        {
          name: 'Kel. St. (Em) dr. Rosihan Sipayung Sp.PD / St. (Em) Evelina indah br. Girsang (Op. Athalya) (Medan)',
          cucu: [
            {
              num: 1,
              name: 'Sy. dr. Yosra Mula Maratur Sipayung / Panary br. Sitopu S.H., M.Kn (B. Lampung)',
              cicit: ['Athalya Roseline br. Sipayung (B. Lampung)', 'Advendo Christofan Sipayung (B. Lampung)']
            },
            {
              num: 2,
              name: 'dr. Elisabet br. Sipayung, M.Ked (PD), Sp.PD / Richard Subakat Manurung, SE, SH, MH (Jakarta)',
              cicit: ['Rebecca Honey br. Manurung (Jakarta)', 'Raphael Cornelius Manurung (Jakarta)']
            },
            {
              num: 3,
              name: 'Maria Kristina br. Sipayung, ST., M.T (Bandung)',
              cicit: []
            },
            {
              num: 4,
              name: 'Yohan Made Ardo Sipayung, S.H. / Tania Anastasia Rebecca br. Sitompul, S.K.M (B. Lampung)',
              cicit: ['Carissa Yeshara br. Sipayung (B. Lampung)']
            }
          ]
        }
      ]
    },
    {
      title: 'Anak ke-2',
      groups: [
        {
          name: 'Kel. drg. Roslina br. Sipayung / (+) Pdt. Jamerson Hasiholan Damanik, S.Th (Op. Si Barra) (Medan)',
          cucu: [
            {
              num: 1,
              name: 'Mona Sartika br. Damanik, S.E (Medan)',
              cicit: []
            },
            {
              num: 2,
              name: 'Melissa Silvia br. Damanik, S.E. / Arnold Aprizal Marbun (Kotapinang)',
              cicit: []
            },
            {
              num: 3,
              name: 'Minoviolga Susanta br. Damanik, S.Ak. / Boy Harpianto Sitanggang, A.Md.Pjk (Pekanbaru)',
              cicit: ['Barra Harvino Sitanggang (Pekanbaru)']
            },
            {
              num: 4,
              name: 'Joel Manase Damanik, A.Md (Palu)',
              cicit: []
            }
          ]
        }
      ]
    },
    {
      title: 'Anak ke-3',
      groups: [
        {
          name: 'Kel. (+) St. (Em) Robert Monang Sipayung/ St. (Em) Pujin Rehngenana br. Bukit (Op. Rindika) (Medan)',
          cucu: [
            {
              num: 1,
              name: 'Cst. Yodiara Sipayung S.E / Liza Kartika br. Sibarani S.T (P. Siantar)',
              cicit: ['Rindika Damai Syahputri br. Sipayung (P. Siantar)']
            },
            {
              num: 2,
              name: 'Pnt. Boanerges Putra Sipayung S.P., M.P / Wilda br. Lumban Tobing S.S.T., M.Agr (Kefamenanu)',
              cicit: []
            },
            {
              num: 3,
              name: 'Ari Robin Rosi Sipayung S.H (Medan)',
              cicit: []
            }
          ]
        }
      ]
    },
    {
      title: 'Anak ke-4',
      groups: [
        {
          name: 'Kel. Robensius Sipayung / St. (Em) Rasma br. Purba, S.Pd (Op. Elnathan) (Medan)',
          cucu: [
            {
              num: 1,
              name: 'Rora Yosabelin br. Sipayung, S.E (Jakarta)',
              cicit: []
            },
            {
              num: 2,
              name: 'Agung Yosua Sipayung, S.Kom. / Laura Rosella br. Aritonang, S.I.Kom (Medan)',
              cicit: []
            },
            {
              num: 3,
              name: 'Arief Fredrick Sipayung, S.Kom. / Aprima Sahrayani br. Purba, A.Md (Medan)',
              cicit: ['Adrian Elnathan Sipayung (Medan)', 'Hansel Manuel Sipayung (Medan)']
            }
          ]
        }
      ]
    },
    {
      title: 'Anak ke-5',
      groups: [
        {
          name: 'Kel. Linarita br. Sipayung/ Ir Sahat Siahaan (Op Si Daniel ) (Medan)',
          cucu: [
            {
              num: 1,
              name: 'dr. Benny Gomgom Siahaan Sp.B / dr. Friskiani br. Tambunan Sp.KFR (Berastagi/Kabanjahe)',
              cicit: []
            },
            {
              num: 2,
              name: 'DR.Drs.Riduan Siagian SSi,SH MH,MM / Yuliani br. Siahaan (Purwakarta)',
              cicit: ['Andika Daniel Rizky Siagian SM (Jakarta)', 'Shelley Jane Limina Rotua br. Siagian / Hans Gilbert Hamonangan Siahaan ( Bekasi )']
            }
          ]
        }
      ]
    },
    {
      title: 'Anak ke-6',
      groups: [
        {
          name: 'Kel. Tamar Jaya Sipayung, S.E. / Sari Ronita br. Purba Tambak, S.H (Medan)',
          cucu: [
            {
              num: 1,
              name: 'Kornelius Septa Jasa Sipayung, A.Md.Kom (Jakarta)',
              cicit: []
            },
            {
              num: 2,
              name: 'Johannes Bastian Jasa Sipayung (Sitoluama)',
              cicit: []
            }
          ]
        }
      ]
    },
    {
      title: 'Anak ke-7',
      groups: [
        {
          name: 'Kel. Oen jong jung (Joshua) Sipayung / Rainta Linsana br. Purba Tambak, S.S. (Jakarta)',
          cucu: [
            {
              num: 1,
              name: 'Kenzo Alexander Bunjaya Sipayung (Jakarta)',
              cicit: []
            }
          ]
        }
      ]
    }
  ]

  return (
    <div className="w-full bg-gradient-to-br from-[#f5f1e8] to-[#fffbf7] py-12 md:py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 left-5 w-24 h-24 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-5 w-32 h-32 bg-[#c41e3a] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-[#8b4513] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a574]"></div>
            <div className="text-4xl text-[#d4a574]">✦</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a574]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2d1b1a] mb-2">
            Turut Mengundang
          </h2>
          <p className="text-[#6b5344] text-sm">Keluarga Besar dari berbagai wilayah</p>
        </div>

        {/* Family Groups Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {familyGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-[#fffbf7] rounded-xl shadow-lg border-2 border-[#d4a574] hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden group"
            >
              {/* Corner ornament */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#d4a574] to-[#c41e3a] opacity-10 rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-[#d4a574] to-[#c41e3a] opacity-10 rounded-tl-full"></div>
              
              <h3 className="text-lg font-bold text-[#8b4513] mb-4 pb-3 border-b-2 border-[#d4a574] relative z-10">
                {group.title}
              </h3>

              <div className="space-y-4 relative z-10">
                {group.groups.map((g, gIdx) => (
                  <div key={gIdx} className="space-y-3 bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-[#e8dcc8]">
                    <p className="text-sm text-[#2d1b1a] font-bold leading-relaxed">
                      {g.name}
                    </p>

                    {g.cucu && g.cucu.length > 0 && (
                      <div className="ml-4 space-y-3 mt-3">
                        <p className="text-xs font-semibold text-[#8b4513]">Cucu :</p>
                        {g.cucu.map((cucu, cucuIdx) => (
                          <div key={cucuIdx} className="space-y-1">
                            <p className="text-xs text-[#2d1b1a] font-semibold">
                              {cucu.num}. {cucu.name}
                            </p>
                            {cucu.cicit && cucu.cicit.length > 0 && (
                              <div className="ml-4">
                                <p className="text-xs text-[#8b4513] font-semibold mb-1">Cicit :</p>
                                <ul className="space-y-0.5">
                                  {cucu.cicit.map((cicit, citIdx) => (
                                    <li key={citIdx} className="text-xs text-[#6b5344]">
                                      • {cicit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
