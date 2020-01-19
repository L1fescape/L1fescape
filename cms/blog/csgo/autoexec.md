```autoexec
// Aliases
alias "m4/ak" "buy m4a1; buy ak47;"
alias "aug/sg" "buy aug; buy sg556;"
alias "galil/famas" "buy galilar; buy famas;"
alias "g3sg1/scar20" "buy g3sg1; buy scar20;"
alias "goodpistol" "buy fiveseven; buy tec9;"
alias "cheapsmg" "buy mac10; buy mp9;"
alias "bbq" "buy incgrenade; buy molotov;"

alias "disc" "disconnect"
alias "showmouse" // for mouse on scoreboard
alias "+ng" "+showscores; net_graph 1"
alias "-ng" "-showscores; net_graph 0"
alias bhopon "bind MWHEELDOWN +jump;bind MWHEELUP +jump;bind mouse3 bhopoff"
alias bhopoff "bind MWHEELDOWN invnext;bind MWHEELUP invprev;bind mouse3 bhopon"
alias "+jumpthrow" "+jump;-attack"
alias "+runjumpthrow" "+forward;+jumpthrow"
alias "-jumpthrow" "-jump"
alias "-runjumpthrow" "-forward;-jumpthrow"
alias "surf" "bind mouse4 +left;bind mouse5 +right;fps_max 800"
alias "practice" "sv_cheats 1; bind v "noclip"; impulse 101; sv_infinite_ammo 2; ammo_grenade_limit_total 6; sv_grenade_trajectory 1; sv_grenade_trajectory_thickness 0.5; mp_freezetime 0; mp_roundtime_defuse 60; mp_buytime 60000; mp_buy_anywhere 1; mp_maxmoney 50000; mp_startmoney 50000; mp_teammates_are_enemies 1; bot_stop 1; mp_warmup_end; bind v noclip; cl_draw_only_deathnotices 0; weapon_debug_spread_show 0; weapon_debug_spread_gap 0.67;mp_restartgame 1"
alias "impacts" "toggle sv_showimpacts; toggle sv_showimpacts_penetration;"
alias "unpractice" "sv_cheats 0; impulse 101; sv_showimpacts 0; sv_showimpacts_penetration 0; sv_infinite_ammo 0; ammo_grenade_limit_total 6; sv_grenade_trajectory 0;"
alias "bots" "sv_cheats 1;god;mp_warmup_start;mp_warmup_pausetimer 1;mp_autoteambalance 0;mp_limitteams 0;mp_buy_anywhere 1;mp_randomspawn 1;mp_spawnprotectiontime 0;mp_respawn_immunitytime 0;sv_infinite_ammo 1;bot_quota_mode normal;bot_difficulty 3;bot_dont_shoot 1;bot_kick;mp_restartgame 1;bot_add_ct;bot_add_ct;bot_add_ct;bot_add_ct;bot_add_ct;bot_add_ct;bot_add_ct;bot_add_ct;bot_add_ct;impulse 101;cl_draw_only_deathnotices 0;weapon_debug_spread_show 0;weapon_debug_spread_gap 0.67;" // bot warmup mode
alias "pcount" "toggle cl_hud_playercount_showcount 0 1" // toggle the menu with escape to refresh the hud

alias full "mat_setvideomode 1920 1080 0"
alias window "mat_setvideomode 1920 1080 1"

alias show show1
alias show1 "+cl_show_team_equipment; bind w +showup; alias show show2"
alias show2 "unbind w; -cl_show_team_equipment; bind w +forward; alias show show1"

alias +showup "+forward; +cl_show_team_equipment"
alias -showup "-forward;"

// Gun Binds
bind "HOME" "buy vest;"
bind "END" "buy vesthelm;"
bind "KP_PGUP" "buy defuser;"
bind "KP_PGDN" "buy decoy;"

bind "f12" "buy flashbang;"
bind "f11" "buy smokegrenade;"
bind "f10" "buy hegrenade;"
bind "f9" "bbq;"
bind "f1" "buy p250;"
bind "f2" "buy deagle;"
bind "f3" "goodpistol;"
bind "f4" "buy UMP45;"
bind "f5" "galil/famas;"
bind "f6" "m4/ak;"
bind "f7" "buy ssg08;"
bind "f8" "buy awp;"

// Binds
unbind y
unbind u
unbind k
unbind alt
bind enter "messagemode"
bind \ "messagemode2"
bind "v" "use weapon_smokegrenade"
bind "mouse3" "use weapon_knife; use weapon_flashbang"
bind "TAB" "+ng"
bind space "+jump"
bind w "+forward"
bind a "+moveleft"
bind s "+back"
bind d "+moveright"
bind "e" "+use"
bind MWHEELDOWN "invnext"
bind MWHEELUP "invprev"
bind shift "+speed"
bind f "+lookatweapon"
bind g "drop"
bind h "bot_place;sm_sl" // places bot for practice + surf saveloc
bind n "+jumpthrow" // nade jump throw
bind m "+runjumpthrow"
bind v "noclip"
bind h "use weapon_c4; drop;"
bind t "+spray_menu"

// Video
net_graph "1"
cl_forcepreload "1"
cl_disablefreezecam "1"
cl_freezecampanel_position_dynamic "0"
r_drawtracers_firstperson "1"
cl_cmdrate "128"
cl_updaterate "128"
rate "786432"
interp_ratio "1"
m_rawinput "1"

// Mouse
sensitivity "1.3"
zoom_sensitivity_ratio_mouse "1.0"
m_rawinput "0" // RInput via sourceGL instead
m_pitch "0.022"
m_customaccel "0"
m_mouseaccel1 "0"
m_mouseaccel2 "0"

// Video
mat_monitorgamma "1.6"
mat_queue_mode "-1" // auto detect multi-core rendering
fps_max "0" // uncapping fps for RInput
fps_max_menu "0"
r_dynamic "0"
r_drawtracers_firstperson "0"
alias full "mat_setvideomode 1920 1080 0"
alias win "mat_setvideomode 1280 720 1"

// Audio
volume "1"
snd_mix_async "1"   // (allows for shorter lookahead buffer (snd_mixahead), improves performance)
snd_mixahead "0.025"   // (low audio latency, makes CS audio feel more insync with screen)
voice_scale "0.1"
voice_enable "1"
windows_speaker_config "1"
snd_front_headphone_position "53.2"
snd_rear_headphone_position "90.0"
snd_headphone_pan_exponent "1.2"
snd_headphone_pan_radial_weight "0.5"
snd_mute_losefocus  "0" // mute game when alt-tabbed
snd_deathcamera_volume "0"
snd_mapobjective_volume "0"
snd_menumusic_volume "0"
snd_musicvolume "0"
snd_mute_losefocus "0"
snd_roundend_volume "0"
snd_roundstart_volume "0"
snd_tensecondwarning_volume "0.08"
voice_mixer_volume "0.62"
dsp_enhance_stereo "0"
alias lo "volume 0.01"
alias hi "volume 1"

// HUD
hud_scaling "0.80" // CS:S sized HUD
hud_showtargetid "1"
cl_hud_background_alpha "0.100000"
cl_hud_bomb_under_radar "0"
cl_hud_color "1"
cl_hud_healthammo_style "1"
cl_hud_playercount_pos "0"
cl_hud_playercount_showcount "0"
cl_hud_radar_scale "0.900000"
cl_righthand "1"
cl_showloadout "1"
cl_showpos "0"
cl_showfps "1"
net_graph "0"
net_graphproportionalfont "0" // small netgraph font
closeonbuy "1"

// Radar
cl_radar_always_centered "0"
cl_radar_rotate "1"
cl_radar_scale "0.38"
cl_radar_icon_scale_min "0.4"
cl_radar_square_with_scoreboard "0"

// Reposition gun model to mimic 1.6
viewmodel_presetpos "0"
viewmodel_fov "68"
viewmodel_offset_x "2.500000"
viewmodel_offset_y "0"
viewmodel_offset_z "-1.500000"
// Reduce gun shifting when crouching
cl_viewmodel_shift_left_amt "0.5"
cl_viewmodel_shift_right_amt "0.5"
cl_bobcycle "0.98" // 0.98 is enforced by ESEA/ESL
cl_bob_lower_amt "5"
cl_bobamt_lat "0.1"
cl_bobamt_vert "0.1"

// Crosshair
cl_crosshairstyle "4"
cl_crosshairsize "2"
cl_crosshairthickness "1"
cl_crosshairgap "-1" // classic
cl_fixedcrosshairgap "3" // new
cl_crosshairdot "0"
cl_crosshairusealpha "1"
cl_crosshairalpha "999"
cl_crosshair_drawoutline "1"
cl_crosshair_outlinethickness "1"
cl_crosshairgap_useweaponvalue "0"

// White crosshair
cl_crosshaircolor "5"
cl_crosshaircolor_r "255"
cl_crosshaircolor_g "255"
cl_crosshaircolor_b "255"

// Misc
cl_autohelp "0"   // (disables ingame tips, can improve FPS)
cl_disablehtmlmotd "0"   // (for use with -no-browser in launch options)
cl_downloadfilter "nosounds"   // (stops servers from downloading annoying custom sounds)
cl_showhelp "0"   // (disables ingame tips, similar to cl_autohelp)
m_rawinput "1"   // (enables raw hardware input for mouse, disables all software filtering, acceleration, post-processing etc)
joystick "0"   // (disables joystick support, mandatory for playing on faceit servers)
cl_teamid_overhead_always "1"
cl_show_team_equipment "1"

host_writeconfig // write settings to config.cfg
echo ""
echo ""
echo "autoexec.cfg executed"
echo ""
echo ""
echo ""
```
