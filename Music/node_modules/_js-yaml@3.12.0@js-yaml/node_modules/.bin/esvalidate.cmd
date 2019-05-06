@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\_esprima@4.0.1@esprima\bin\esvalidate.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\_esprima@4.0.1@esprima\bin\esvalidate.js" %*
)