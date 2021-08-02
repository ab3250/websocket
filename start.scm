;;#! /usr/bin/env 
(use-modules  
  (web request)
  (web response)
  (sxml simple)
  (web http)
  (web server)
  (web uri)
;;  (web client)
  (ice-9 rdelim)
  (rnrs bytevectors)
  (ice-9 binary-ports)
  (oop goops)
  (srfi srfi-18)
 ;; (system vm trace)
  (ice-9 iconv)
  (ice-9 receive)
  (ice-9 regex)
  (web socket server)
  (json json)
  (fibers))

;;(include "ab-library.scm" )

; (define (handler store data)
;   (pk 'store store)
;   (if (string? data)
;       (string-reverse data)
;       "hello"))

(define (handler data) 
  (cond 
    ((string=? data "button1") (display "hello button 1"))
    ((string=? data "button2") (display "hello button 2"))) 
    #f)

(run-ws-server handler (make-server-socket #:port 9090))



