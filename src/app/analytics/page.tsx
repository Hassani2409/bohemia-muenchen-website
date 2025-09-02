'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Users, Calendar, Star, Phone, MapPin, Clock, Euro } from 'lucide-react';

interface AnalyticsData {
  visitors: number;
  reservations: number;
  revenue: number;
  rating: number;
  peakHours: string[];
  popularDishes: { name: string; orders: number }[];
  monthlyGrowth: number;
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData>({
    visitors: 0,
    reservations: 0,
    revenue: 0,
    rating: 0,
    peakHours: [],
    popularDishes: [],
    monthlyGrowth: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate real-time data loading
    const loadAnalytics = () => {
      setTimeout(() => {
        setData({
          visitors: 2847,
          reservations: 156,
          revenue: 12450,
          rating: 4.9,
          peakHours: ['19:00-20:00', '20:00-21:00', '21:00-22:00'],
          popularDishes: [
            { name: 'Svíčková na smetaně', orders: 89 },
            { name: 'Guláš s knedlíky', orders: 76 },
            { name: 'Wiener Schnitzel', orders: 64 },
            { name: 'Tschechisches Bier', orders: 234 }
          ],
          monthlyGrowth: 23.5
        });
        setLoading(false);
      }, 1500);
    };

    loadAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-2xl font-playfair font-bold text-primary">Lade Analytics...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-playfair font-bold text-primary">Restaurant Analytics</h1>
              <p className="text-gray-600 mt-2">Live Dashboard - Bohemia München</p>
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              Live • Aktualisiert vor 2 Min
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-green-600 text-sm font-medium">+{data.monthlyGrowth}%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{data.visitors.toLocaleString()}</h3>
            <p className="text-gray-600">Website Besucher</p>
            <div className="mt-2 text-sm text-gray-500">Letzten 30 Tage</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-delay-1">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-green-600 text-sm font-medium">+18%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{data.reservations}</h3>
            <p className="text-gray-600">Reservierungen</p>
            <div className="mt-2 text-sm text-gray-500">Diese Woche</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-delay-2">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Euro className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-green-600 text-sm font-medium">+31%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">€{data.revenue.toLocaleString()}</h3>
            <p className="text-gray-600">Umsatz</p>
            <div className="mt-2 text-sm text-gray-500">Diese Woche</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-delay-3">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-green-600 text-sm font-medium">+0.2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{data.rating}/5</h3>
            <p className="text-gray-600">Google Bewertung</p>
            <div className="mt-2 text-sm text-gray-500">427 Bewertungen</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Peak Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Stoßzeiten</h3>
            <div className="space-y-4">
              {data.peakHours.map((hour, index) => (
                <div key={hour} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="font-medium">{hour}</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-accent rounded-full h-2 transition-all duration-1000"
                        style={{ width: `${90 - index * 15}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">{90 - index * 15}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Dishes */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Beliebte Gerichte</h3>
            <div className="space-y-4">
              {data.popularDishes.map((dish, index) => (
                <div key={dish.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium">{dish.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{dish.orders} Bestellungen</span>
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Live Aktivität</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-600">23</h4>
              <p className="text-blue-600">Aktive Besucher</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-600">7</h4>
              <p className="text-green-600">Anrufe heute</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-purple-600">156</h4>
              <p className="text-purple-600">Wegbeschreibungen</p>
            </div>
          </div>
        </div>

        {/* ROI Showcase */}
        <div className="mt-12 bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-playfair font-bold mb-4">ROI durch digitale Präsenz</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">+47%</div>
                <div className="text-lg">Mehr Online-Reservierungen</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">€18,500</div>
                <div className="text-lg">Zusätzlicher Monatsumsatz</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-lg">Verbesserte Online-Bewertung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
